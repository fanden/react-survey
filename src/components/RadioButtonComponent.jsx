/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
function RadioButton({ handleChange, name }) {

    const [inputs, setInputs] = useState({
        name: ""
    })

    return (
        <ul>
            <li>
                <input id={`${name}-one`} type="radio" name={name} value="1" onChange={(e) => { handleChange(e) }} />
                <label htmlFor={`${name}-one`}>1</label>
            </li>
            <li>
                <input id={`${name}-two`} type="radio" name={name} value="2" onChange={(e) => { handleChange(e) }} />
                <label htmlFor={`${name}-two`}>2</label>
            </li>
            <li>
                <input id={`${name}-three`} type="radio" name={name} value="3" onChange={(e) => { handleChange(e) }} />
                <label htmlFor={`${name}-three`}>3</label>
            </li>
            <li>
                <input id={`${name}-four`} type="radio" name={name} value="4" onChange={(e) => { handleChange(e) }} />
                <label htmlFor={`${name}-four`}>4</label>
            </li>
        </ul>

    );
}

export default RadioButton