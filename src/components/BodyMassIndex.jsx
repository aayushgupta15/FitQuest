import React, { useEffect, useState } from "react";
import style from "../styles/modules/bmi.module.css";
import Button from "./Button";
import { getClasses } from "../utils/getClasses";

function BMI({ isOpen, setIsOpen }) {
  // function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const [index, setIndex] = useState(0);
  // show the result
  const [final, setFinal] = useState("");
  const [state, setState] = useState("");

  const [isResult, setIsResult] = useState(false);

  const closeResult = () => {
    setIsResult(false);
  };

  useEffect(() => {
    setIndex(index);
    if (index == -1) {
      setIsResult(false);
    } else if (index < 18.4) {
      setFinal("orange");
      setState("An UnderWeight");
    } else {
      if (index < 24.5) {
        setFinal("green");
        setState("A Normal");
      } else {
        setFinal("red");
        setState("An OverWeight");
      }
    }
    console.log(`from useEffect ${index}`);
  }, [index]);

  function handleSubmit(e) {
    e.preventDefault();

    // read the form data
    const form = e.target;
    const formData = new FormData(form);

    // storing in json file
    const formJson = Object.fromEntries(formData.entries());

    // creating corresponding variables
    const wt = formJson.weight;
    const ht = formJson.height;
    if (wt === "" || ht === "") {
      setIndex(-1);
      alert("Height or Weight cannot be 0");
    } else {
      const cal = wt / ht ** 2;

      setIndex(cal.toFixed(2));
    }
    console.log(`from handle ${index}`);

    setIsResult(true);
    closeModal();
  }

  return (
    <div>
      {isResult && (
        <section id={style.overlay}>
          <div className={style.result__container}>
            <div className={getClasses([style.result, style[`${final}`]])}>
              <p>{state} Personality</p>
              <br />
              <strong>{index}</strong>
              <br />
              <br />
              <br />
              <Button variant="secondary" onClick={closeResult}>
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
                placeholder="Height (in mt)"
              />
              <br />
              <br />
              <label htmlFor="weight">Weight (in kg)</label>
              <br />
              <input
                type="number"
                name="weight"
                id="weight"
                step="0.01"
                placeholder="Weight (in kg)"
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
