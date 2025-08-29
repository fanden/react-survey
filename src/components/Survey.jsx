/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./FormComponent";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false);
  const [answersList, setAnswersList] = useState([]);

  const handleChange = (event) => { }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="survey__form">
        <Form 
          answersList={answersList} 
          setAnswersList={setAnswersList}
        />
      </section>
    </main>
  );
}

export default Survey;
