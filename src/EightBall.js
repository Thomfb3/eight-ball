import React, { useState } from 'react';
import './EightBall.css';

const choice = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}


function EightBall(props) {

    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [goldCount, setGoldCount] = useState(0);

    const addColorCount = (color) => {
        if (color === "red") { setRedCount(redCount + 1) };
        if (color === "green") { setGreenCount(greenCount + 1) };
        if (color === "goldenrod") { setGoldCount(goldCount + 1) };
    }

    const updateAnswer = () => {
        const { msg, color } = choice(props.answers)
        setMsg(msg);
        setColor(color);
        addColorCount(color);
    }

    const resetEightball = () => {
        setMsg("Think of a Question");
        setColor("black");
        setRedCount(0);
        setGreenCount(0);
        setGoldCount(0);
    }

    return (
        <>
            <div className='EightBall' onClick={updateAnswer} style={{ backgroundColor: color }}>
                <p>{msg}</p>
            </div>

            <button className='EightBall-reset-btn' onClick={resetEightball}>Reset EightBall</button>
        
            <div className='EightBall-color-records'>
                <p className='EightBall-red-count'>Red: {redCount}</p>
                <p className='EightBall-green-count'>Green: {greenCount}</p>
                <p className='EightBall-gold-count'>Gold: {goldCount}</p>
            </div>
        </>
    )
}


EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}


export default EightBall;