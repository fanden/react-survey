/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./FormComponent";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState([])

  const handleChange = (event) => {}

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

      </section>
      <section className="survey__form">{/* a form should be here */}

        <Form formData={formData} setFormData={setFormData} />
      </section>
    </main>
  );
}

export default Survey;
