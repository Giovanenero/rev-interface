import { FaCheck } from "react-icons/fa";

function CheckBox({value, setValue, style}){

    const handleValue = () => setValue(!value);

    return (
        <button onClick={handleValue} style={style ? style : {}}>
            {value && <FaCheck size={20}/>}
        </button>
    )
}

export default CheckBox;