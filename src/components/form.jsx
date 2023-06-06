import React from "react";

function MyForm() {
  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(formJson.height);
    console.log(formJson.weight);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Height: <input name="height" type="number" id="height" />
      </label>
      <hr />
      <label>
        Weight: <input name="weight" type="number" id="weight" />
      </label>
      <hr />

      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default MyForm;
