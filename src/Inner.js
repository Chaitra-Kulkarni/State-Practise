import { useState } from 'react'
import './Inner.css'

const Inner = (props) => {

    const [text, setText] = useState('');
    let [count, setCount] = useState(0);

    const changeText = () => {
        setText('Innest');
        setCount(prevCount => prevCount+1)
        props.getText();
    }

    return(
        <div className="inner-div">
            <h2>{text || "Inner"} : {count}</h2>
            <button className="btn" onClick={changeText}>Click Me!</button>
        </div>
    )
}

export default Inner;