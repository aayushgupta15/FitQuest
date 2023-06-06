import React, { useState } from "react";
import style from "../styles/modules/bmi.module.css";
import Button from "./Button";
import { getClasses } from "../utils/getClasses";

function BMI({ isOpen, setIsOpen }) {
  // function to show the bmi
  const [bmi, setBmi] = useState(0);
  const [final, setFinal] = useState("");
  // const [green, setGreen] = useState(false);
  // const [red, setRed] = useState(false);
  // const [orange, setOrange] = useState(false);

  // function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const [isResult, setIsResult] = useState(false);

  const closeResult = () => {
    setIsResult(false);
  };

  // function to handle the submit

  const handleSubmit = async (e) => {
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
    // error handling
    if (w === "" || h === "") {
      closeResult();
      alert("Height or Weight cannot be 0");
    } else {
      await setBmi(w / h);
    }

    if (bmi < 18) {
      setFinal("green");
    } else if (18 <= bmi <= 24) {
      setFinal("orange");
    } else {
      setFinal("red");
    }
    setIsResult(true);
    closeModal();
  };

  return (
    <div>
      {isResult && (
        <section id={style.overlay}>
          <div className={style.result__container}>
            <div className={getClasses([style.result, style[`${final}`]])}>
              <p>
                {final === "orange" ? "An UnderWeight" : ""}
                {final === "green" ? "A Healthy" : ""}
                {final === "red" ? "An OverWeight" : ""} Personality
              </p>
              <br />
              <strong>{bmi.toFixed(2)}</strong>
              <br />
              <br />
              <br />
              <Button variant="button" onClick={closeResult}>
                Close
              </Button>
            </div>
          </div>
        </section>
      )}
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
                <Button variant="secondary" onClick={closeModal}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}

export default BMI;
