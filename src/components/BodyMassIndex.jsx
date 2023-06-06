import React from "react";
import style from "../styles/modules/bmi.module.css";
import Button from "./Button";

function BMI({ isOpen, setIsOpen }) {
  return (
    <div>
      {isOpen && (
        <section id={style.overlay}>
          <div className={style.container}>
            <form action="">
              <label htmlFor="height">Height (in mts.)</label>
              <br />
              <input
                type="number"
                name="height"
                id="height"
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
        </section>
      )}
    </div>
  );
}

export default BMI;
