import React, { useState } from "react";
import style from "../styles/modules/bmi.module.css";
import Button from "./Button";

function BMI({ isOpen, setIsOpen }) {
  // function to show the bmi
  const [bmi, setBmi] = useState(0);
  const [green, setGreen] = useState(false);
  const [red, setRed] = useState(false);
  const [orange, setOrange] = useState(false);

  // function to close the modal
  // const closeModal = () => setIsOpen(false);

  // function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // read the form data
    const form = e.target;
    const formData = new FormData(form);
    // console
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    // set the variables
    const w = formJson.weight;
    const h = formJson.height ** 2;

    setBmi(w / h);

    if (bmi < 18) {
      setRed(true);
    } else if (18 <= bmi <= 24) {
      setGreen(true);
    } else {
      setOrange(true);
    }

    // closeModal();
  };

  return (
    <div>
      {isOpen && (
        <section id={style.overlay}>
          <div className={style.container}>
            <form method="post" onSubmit={handleSubmit}>
              <label htmlFor="height">Height (in mts.)</label>
              <br />
              <input
                type="number"
                name="height"
                id="height"
                step="0.01"
                placeholder="Height in mt"
              />
              <br />
              <br />
              <label htmlFor="weight">Weight in kg</label>
              <br />
              <input
                type="number"
                name="weight"
                id="weight"
                step="0.01"
                placeholder="Weight in kg"
              />
              <br />
              <br />
              <br />
              <br />
              <div className={style.button_container}>
                <Button type="submit">Check</Button>
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
          {green && (
            <div className={style.green}>
              <h2>You are a Healthy Personality</h2>
              <h4>{bmi}</h4>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default BMI;
