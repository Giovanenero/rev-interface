import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import "./Start.css";

function Start() {

    const [isRegister, setIsRegister] = React.useState(false);
    const [verticalNavTrigger, setVerticalNavTrigger] = React.useState(false);

    const handleRegister = () => setIsRegister(!isRegister);
    const handleVerticalNav = () => setVerticalNavTrigger(!verticalNavTrigger);


  return (
    <div className={verticalNavTrigger ? "container-start background-nav-mobile" : "container-start"}>
        <header className="container-start-header">
            <h1 className="start-header-title">Logo</h1>
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
                    <li><button id="test">Inicio</button></li>
                    <li><button>Sobre</button></li>
                    <li><button>Contato</button></li>
                </ul>
            </nav>

        </div>
        <div className="container-form">
            <form className={isRegister ? "change-form-login star-login" : "start-login"}>
                <h1>Login</h1>
                <div className="form-input">
                    <input type="text" required/>
                    <label>Email</label>
                    <MdOutlineEmail />
                </div>
                <div className="form-input">
                    <input type="password" required/>
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
                <button className="form-submit" type="submit">Entrar</button>
                <h5>Não tem uma conta? <span onClick={handleRegister}>Registre-se</span></h5>
            </form>
            <form className={isRegister ? "star-register" : "change-form-register start-register"}>
                <h1 className="start-header-title">Registrar</h1>
                <div className="form-input">
                    <input type="text" required/>
                    <label>Nome</label>
                    <FaRegUser />
                </div>
                <div className="form-input">
                    <input type="text" required/>
                    <label>Sobrenome</label>
                    <FaRegUser />
                </div>
                <div className="form-input">
                    <input type="text" required/>
                    <label>Email</label>
                    <MdOutlineEmail />
                </div>
                <div className="form-input">
                    <input type="password" required/>
                    <label>Senha</label>
                    <FiLock />
                </div>
                <div className="form-input">
                    <input type="password" required/>
                    <label>Senha novamente </label>
                    <FiLock />
                </div>
                <button className="form-submit" type="submit">Registrar</button>
                <h5><span onClick={handleRegister}>Ja tenho uma conta!</span></h5>
            </form>
        </div>
    </div>
  );
}

export default Start;
