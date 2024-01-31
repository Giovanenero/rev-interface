import React from "react";
import './Login.css'

//import video from "./../Assets/rev-login-mobile.mp4";

import { FaCheck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleValue = () => setShowPassword(!showPassword);

  return (
    <div className="container-login-general">

        {/* <video autoPlay muted loop className="video-background">
            <source src={video} type="video/mp4"/>
        </video> */}

        <div className="container-login">
        <div className="login-content-mobile">
                <div className="login-header-mobile">
                    <CgProfile size={150} color="#fdfdfd"/>
                </div>
                <div className="login-info-mobile">
                    <input 
                        type="text" 
                        maxLength={64}
                        placeholder="Email" 
                        onChange={(e) => {console.log(e.target.value)}}
                    />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        maxLength={16}
                        placeholder="Senha" 
                        onChange={(e) => {console.log(e.target.value)}}
                    />
                </div>
                <div className="login-checkbox-mobile">
                    <div className="container-login-checkbox">
                        <button onClick={handleValue} className="checkbox">
                            {showPassword && <FaCheck/>}
                        </button>
                        Mostrar senha?
                    </div>
                    <button className="button-recover-password">
                        Esqueci minha senha
                    </button>
                </div>
                <div className="login-buttons-mobile">
                    <button>
                        Entrar
                    </button>
                    <button>
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>

        <div className="container-login-mobile">
            <div className="login-content-mobile">
                <div className="login-header-mobile">
                    <CgProfile size={150} color="#fdfdfd"/>
                </div>
                <div className="login-info-mobile">
                    <input 
                        type="text" 
                        maxLength={64}
                        placeholder="Email" 
                        onChange={(e) => {console.log(e.target.value)}}
                    />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        maxLength={16}
                        placeholder="Senha" 
                        onChange={(e) => {console.log(e.target.value)}}
                    />
                </div>
                <div className="login-checkbox-mobile">
                    <div className="container-login-checkbox">
                        <button onClick={handleValue} className="checkbox">
                            {showPassword && <FaCheck/>}
                        </button>
                        Mostrar senha?
                    </div>
                    <button className="button-recover-password">
                        Esqueci minha senha
                    </button>
                </div>
                <div className="login-buttons-mobile">
                    <button>
                        Entrar
                    </button>
                    <button>
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
