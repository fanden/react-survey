/* eslint-disable no-unused-vars */
import { useState } from "react"
import RadioButton from "./RadioButtonComponent";

function Form() {

    const [inputs, setInputs] = useState({
        colorRating: "",
        timeRating: "",
        review: "",
        username: "",
        email: ""
    })

    const handleChange = (event) => {
        inputs[event.currentTarget.name] = event.currentTarget.value
        setInputs({ ...inputs })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with values:', inputs);
        setInputs({
            colorRating: "",
            timeRating: "",
            review: "",
            username: "",
            email: ""
        })
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButton name="colorRating" handleChange={handleChange} />

            </div>
            <div className="form__group radio">
                <h3>How do you like to spend time with your rubber duck</h3>
                <RadioButton name="timeRating" handleChange={handleChange} />

            </div>
            <label
            >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                value={inputs.review}
                onChange={handleChange}
            ></textarea></label
            ><label
            >Put your name here (if you feel like it):<input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange} /></label
            ><label
            >Leave us your email pretty please??<input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                /></label

            ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}

export default Form