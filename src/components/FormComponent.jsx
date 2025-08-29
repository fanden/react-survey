/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import RadioButton from "./RadioButtonComponent";
import AnswersList from "./AnswersList";

function Form({ answersList, setAnswersList }) {

    const [inputs, setInputs] = useState({
        bestFeatures: [],
        worstFeatures: [],
        consistency: "",
        colour: "",
        logo: "",
        timeSpent: "",
        review: "",
        username: "",
        email: ""
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.currentTarget;

        if (type === 'checkbox') {
            if (checked) {
                setInputs(prev => ({
                    ...prev,
                    [name]: [...prev[name], value]
                }));
            } else {
                setInputs(prev => ({
                    ...prev,
                    [name]: prev[name].filter(item => item !== value)
                }));
            }
        } else {
            setInputs(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setAnswersList([...answersList, inputs]);
        
        setInputs({
            bestFeatures: [],
            worstFeatures: [],
            consistency: "",
            colour: "",
            logo: "",
            timeSpent: "",
            review: "",
            username: "",
            email: ""
        });
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Tell us what you think about your rubber duck!</h2>

                <div className="form__group">
                    <h3>What would you say that are the best features of your rubber duck?</h3>
                    <label><input type="checkbox" name="bestFeatures" value="yellow" onChange={handleChange} /> Its yellow!</label>
                    <label><input type="checkbox" name="bestFeatures" value="squeaks" onChange={handleChange} /> It squeaks!</label>
                    <label><input type="checkbox" name="bestFeatures" value="logo" onChange={handleChange} /> It has a logo!</label>
                    <label><input type="checkbox" name="bestFeatures" value="big" onChange={handleChange} /> Its big!</label>
                </div>

                <div className="form__group">
                    <h3>What would you say that are the worst bits of your rubber duck?</h3>
                    <label><input type="checkbox" name="worstFeatures" value="yellow" onChange={handleChange} /> Its yellow!</label>
                    <label><input type="checkbox" name="worstFeatures" value="squeaks" onChange={handleChange} /> It squeaks!</label>
                    <label><input type="checkbox" name="worstFeatures" value="logo" onChange={handleChange} /> It has a logo!</label>
                    <label><input type="checkbox" name="worstFeatures" value="big" onChange={handleChange} /> Its big!</label>
                </div>

                <div className="form__group radio">
                    <h3>How do you rate your rubber duck consistency?</h3>
                    <RadioButton name="consistency" handleChange={handleChange} />

                </div>

                <div className="form__group radio">
                    <h3>How do you rate your rubber duck colour?</h3>
                    <RadioButton name="colour" handleChange={handleChange} />

                </div>

                <div className="form__group radio">
                    <h3>How do you rate your rubber ducks logo?</h3>
                    <RadioButton name="logo" handleChange={handleChange} />

                </div>

                <div className="form__group">
                    <h3>How do you like to spend your time with your rubber duck?</h3>
                    <label><input type="checkbox" name="timeSpent" value="swimming" onChange={handleChange} /> Swimming</label>
                    <label><input type="checkbox" name="timeSpent" value="bathing" onChange={handleChange} /> Bathing</label>
                    <label><input type="checkbox" name="timeSpent" value="chatting" onChange={handleChange} /> Chatting</label>
                    <label><input type="checkbox" name="timeSpent" value="noTime" onChange={handleChange} /> I dont like to spend time with it</label>
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
        </>
    );
}

export default Form