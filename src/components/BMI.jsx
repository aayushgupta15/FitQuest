import React from "react";
import Button from "./Button";

function BMI({ modalOpen, setModalOpen }) {
  return (
    <div>
      {modalOpen && (
        <form action="">
          <label htmlFor="height">Height (in mt): </label>
          <br />
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Enter your height in meter"
          />
          <br />
          <br />
          <label htmlFor="weight">Weight (in kg): </label>
          <br />
          <input type="number" name="weight" id="weight" />
          <br />
          <br />
          <Button />
        </form>
      )}
    </div>
  );
}

export default BMI;
