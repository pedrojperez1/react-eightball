import React, {useState} from "react";
import "./Eightball.css"

const Eightball = ({answers}) => {
    const genRandomMsg = (answers) => {
        return answers[Math.floor(Math.random() * answers.length)]
    }
    const [currMsg, setCurrMsg] = useState("Think of a question");
    const [currColor, setCurrColor] = useState("black");
    const handleClick = () => {
        const randomMsg = genRandomMsg(answers)
        setCurrMsg(randomMsg.msg);
        setCurrColor(randomMsg.color);
    }
    const handleReset = () => {
        setCurrMsg("Think of a question");
        setCurrColor("black");
    }
    return (
        <>
            <div className="Eightball" style={{backgroundColor: currColor}}>
                <div className="Eightball-msg" onClick={handleClick}>
                    {currMsg}
                </div>
                
            </div>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Eightball;