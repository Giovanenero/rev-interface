import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { TiPhoneOutline } from "react-icons/ti";


import UserService from "./../../Services/UserService.js"

import logo from "./../../Assets/logo-rev.png";

import "./Start.css";

import PopUp from "./../../Components/PopUp/PopUp.js"
import Loader from "./../../Components/Loader/Loader.js";

function Start() {

    const [isRegister, setIsRegister] = React.useState(false);
    const [verticalNavTrigger, setVerticalNavTrigger] = React.useState(false);
    const [messagePopup, setMessagePopup] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false);
    const [user, setUser] = React.useState({name: "", password: "", password_2: "", email: ""})

    const handleRegister = () => {setIsRegister(!isRegister); setUser({name: "", password: "", password_2: "", email: ""})};
    const handleVerticalNav = () => setVerticalNavTrigger(!verticalNavTrigger);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const createacont = (e) => {
        if(user?.name !== "" && user?.password !== "" && user?.password_2 !== "" && user?.email !== ""){
            e.preventDefault();
            if(user.password.trim() !== user.password_2.trim()){
                setMessagePopup({
                    type: "error",
                    title: "Ops! :(",
                    text: "Senha incopatível."
                });
            } else if(!user.email.includes("@")){
                setMessagePopup({
                    type: "error",
                    title: "Ops! :(",
                    text: "Email invalido."
                });
            } else {
                setMessagePopup({
                    type: "question",
                    title: "",
                    text: "Certifique-se de que os email e senha estão corretos.",
                });
            }
        }
    }

    const login = (e) => {
        if(user?.password !== "" && user?.email !== ""){
            e.preventDefault();
            setMessagePopup({
                type: "error",
                title: "Ops! :(",
                text: "Não foi possível fazer seu login. Tente novamente mais tarde!"
            });
        }
    }

  return (
    <div className={verticalNavTrigger ? "container-start background-nav-mobile" : "container-start"}>
        <header className="container-start-header">
            <img className="start-header-title" src={logo} alt="Logo"/>
            <nav>
                <ul>
                    <li><button id="test">Inicio</button></li>
                    <li><button>Sobre</button></li>
                    <li><button>Contato</button></li>
                </ul>
            </nav>
            <div className="container-nav-mobile" onClick={handleVerticalNav}>
                <GiHamburgerMenu size={30}/>
            </div>
        </header>
        <div className={verticalNavTrigger ? "container-mobile change-nav-mobile" : "container-mobile"}>
            <header>
                <div onClick={handleVerticalNav}>
                    <IoMdClose size={30}/>
                </div>
            </header>
            <nav>
                <ul>
                    <li><button id="test">Inicio <IoHomeOutline /></button></li>
                    <li><button>Sobre<BsInfoCircle /></button></li>
                    <li><button>Contato<TiPhoneOutline /></button></li>
                </ul>
            </nav>

        </div>
        <div className="container-form">
            <form className={isRegister ? "change-form-login star-login" : "start-login"}>
                <h1>Login</h1>
                <div className="form-input">
                    <input
                        maxLength={64}
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required 
                    />
                    <label>Email</label>
                    <MdOutlineEmail />
                </div>
                <div className="form-input">
                    <input 
                        maxLength={12}
                        value={user.password}
                        type="password" 
                        name="password"
                        onChange={handleInputChange}
                        required
                    />
                    <label>Senha</label>
                    <FiLock />
                </div>
                <div className="form-checkbox">
                    <span>
                        <input type="checkbox" id="login-checkbox-id"/>
                        <label for="login-checkbox-id">Lembrar-me</label>
                    </span>
                    <h5>Esqueceu sua senha?</h5>
                </div>
                <button className="form-submit" type="submit" onClick={login}>Entrar</button>
                <h5>Não tem uma conta? <span onClick={handleRegister}>Registre-se</span></h5>
            </form>
            <form className={isRegister ? "star-register" : "change-form-register start-register"}>
                <h1 className="start-header-title">Registrar</h1>
                <div className="form-input">
                    <input 
                        maxLength={15}
                        type="text" 
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Nome</label>
                    <FaRegUser />
                </div>
                <div className="form-input">
                    <input 
                        maxLength={64}
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Email</label>
                    <MdOutlineEmail />
                </div>
                <div className="form-input">
                    <input 
                        maxLength={12}
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Senha</label>
                    <FiLock />
                </div>
                <div className="form-input">
                    <input
                        maxLength={12}
                        type="password" 
                        name="password_2"
                        value={user.password_2}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Senha novamente</label>
                    <FiUnlock />
                </div>
                <button className="form-submit" type="submit" onClick={createacont}>Registrar</button>
                <h5><span onClick={handleRegister}>Ja tenho uma conta!</span></h5>
            </form>
        </div>
        {showLoading && <Loader />}
        {messagePopup && (
            <PopUp 
                type={messagePopup?.type} 
                text={messagePopup?.text}
                title={messagePopup?.title}
                setTrigger={setMessagePopup}
                onClick={() => {
                    setShowLoading(true);
                    UserService.createacontSerive(user)
                        .then(response => {
                            setMessagePopup({
                                type: response.status === 201 ? "success" : "error",
                                title: response.status === 201 ? "Sucesso!" : "Operação não realizada!",
                                text: response.data
                            });
                        }).catch(error => {
                            setMessagePopup({
                                type: "error",
                                title: "Operação não realizada!",
                                text: error.response.data
                            });
                        }).finally(() => {setShowLoading(false)})
                }}
            />
        )}
    </div>
  );
}

export default Start;
