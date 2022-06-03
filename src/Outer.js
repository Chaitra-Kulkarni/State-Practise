import { useState } from 'react';
import Inner from './Inner'
import './Outer.css'

const Outer = () => {

    const [outText, setOutText] = useState('');
    const changeOuterText = () => {
        setOutText('Outest')
    }

    return(
        <div className="outer-div">
            <h2>{outText || 'Outer Text'} : </h2>
            <Inner getText={changeOuterText} />
        </div>
    )
}

export default Outer;
