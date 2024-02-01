import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { TiPhoneOutline } from "react-icons/ti";


import { createacontSerive, loginService } from "./../Services/UserService.js";

import logo from "./../Assets/logo-rev.png";

import "./Start.css";

import PopUp from "./../Components/PopUp.js"

function Start() {

    const [isRegister, setIsRegister] = React.useState(false);
    const [verticalNavTrigger, setVerticalNavTrigger] = React.useState(false);
    const [messagePopup, setMessagePopup] = React.useState(false);
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        password: "",
        password_2: "",
        email: ""
    })

    const handleRegister = () => {setIsRegister(!isRegister); setUser({firstName: "", lastName: "", password: "", password_2: "", email: ""})};
    const handleVerticalNav = () => setVerticalNavTrigger(!verticalNavTrigger);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const createacont = (e) => {
        if(
            user?.firstName !== "" &&
            user?.lastName !== "" &&
            user?.password !== "" &&
            user?.password_2 !== "" &&
            user?.email !== ""
        ){
            e.preventDefault();
            createacontSerive(user, setMessagePopup);
        }
    }

    const login = (e) => {
        if(user?.password !== "" && user?.email !== ""){
            e.preventDefault();
            loginService(user)
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
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Nome</label>
                    <FaRegUser />
                </div>
                <div className="form-input">
                    <input
                        maxLength={32}
                        type="text"
                        value={user.lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        required
                    />
                    <label>Sobrenome</label>
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
                    <FiLock />
                </div>
                <button className="form-submit" type="submit" onClick={createacont}>Registrar</button>
                <h5><span onClick={handleRegister}>Ja tenho uma conta!</span></h5>
            </form>
        </div>
        {messagePopup && (
            <PopUp 
                type={messagePopup?.type} 
                text={messagePopup?.text}
                title={messagePopup?.title}
                setTrigger={setMessagePopup}
            />
        )}
    </div>
  );
}

export default Start;
