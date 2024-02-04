import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa"
import { BsInfoCircle } from "react-icons/bs";
import { BsQuestionOctagon } from "react-icons/bs";

import "./PopUp.css"

// props:
// type: succes, error, info, question

function PopUp({
    type,
    text,
    title,
    setTrigger,
    onClick
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
        }
    }

    return (
        <div className="container-popup">
            <div className="container-popup-content">
                <div className="container-popup-icon">
                    {styles[type].icon}
                </div>
                <article className="container-popup-text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
                {type !== "question" ? (
                    <div className="container-popup-button">
                        <button 
                            type="button" 
                            style={{background: styles[type].color}}
                            onClick={() => {setTrigger(false)}}
                        >
                            Ok!
                        </button>
                    </div>
                ) : (
                    <div className="container-popup-buttons">
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
                )}
            </div>
        </div>
    )
}

export default PopUp;