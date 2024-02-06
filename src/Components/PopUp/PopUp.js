import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa"
import { BsInfoCircle } from "react-icons/bs";
import { BsQuestionOctagon } from "react-icons/bs";
import { MdOutlineForwardToInbox } from "react-icons/md";

import "./PopUp.css"
import { useEffect } from "react";

// props:
// type: succes, error, info, question, input

function PopUp({
    type,
    text,
    title,
    setTrigger,
    onClick,
}){

    let styles = {
        success : {
            size: 125,
            color: "rgb(35, 134, 54)",
            icon: <FaCheck size={125} color="rgb(35, 134, 54)"/>
        },
        error : {
            size: 175,
            color: "#EB5757",
            icon: <IoMdClose size={175} color="#EB5757"/>
        },
        info: {
            size: 175,
            color: "rgb(255, 205, 41)",
            icon: <BsInfoCircle size={175} color="rgb(255, 205, 41)"/>
        },
        question: {
            size: 175,
            color: "rgb(255, 205, 41)",
            icon: <BsQuestionOctagon size={175} color="rgb(255, 205, 41)"/>
        },
        input: {
            size: 175,
            color: "#22577A",
            icon: <MdOutlineForwardToInbox size={175} color="#22577A"/>
        }
    }

    useEffect(() => {
        const divOther = document.getElementById("other");
        const divQuestion = document.getElementById("question");
        const divInput = document.getElementById("input");
        const divText = document.getElementById("text");
        divOther.style.display = "none";
        divQuestion.style.display = "none"
        divInput.style.display = "none"
        divText.style.display = "none"
        if(type === "question"){
            divQuestion.style.display = "flex"
            divText.style.display = "flex"
        } else if(type === "input"){
            divQuestion.style.display = "flex";
            divInput.style.display = "flex"
        } else {
            divOther.style.display = "flex";
            divText.style.display = "flex"
        }
    }, [type]);

    return (
        <div className="container-popup">
            <div className="container-popup-content">
                <div className="container-popup-icon">
                    {styles[type].icon}
                </div>
                <article className="container-popup-text" id="text" style={{display: "none"}}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
                <div className="container-popup-input" id="input" style={{display: "none"}}>
                    <h3>{title}</h3>
                    <input placeholder={text} maxLength={6}/>
                </div>
                <div 
                    className="container-popup-button"
                    id="other"
                    style={{display: "none"}}
                >
                    <button 
                        type="button" 
                        style={{background: styles[type].color}}
                        onClick={() => {setTrigger(false)}}
                    >
                        Ok!
                    </button>
                </div>
                <div 
                    className="container-popup-buttons"
                    id="question"
                    style={{display: "none"}}   
                >
                    <button 
                        type="button" 
                        style={{background: styles[type].color}}
                        onClick={onClick}
                    >
                        Certo!
                    </button>
                    <button 
                        type="button" 
                        style={{background: styles[type].color}}
                        onClick={() => {setTrigger(false)}}
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;