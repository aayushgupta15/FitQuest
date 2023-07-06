import React, { useState } from "react";
import Button from "./Button";
import style from "../styles/modules/services.module.css";

function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the PHP server
    fetch("https://localhost:3000/change", {
      method: "POST",
      body: new URLSearchParams({ email }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Registration successful
          alert("Email address registered successfully");
          setEmail("");
        } else {
          // Handle errors
          alert("Error registering email address");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred");
      });
  };

  return (
    <section className={style.container}>
      <h2>Stay In Touch</h2>
      <hr />
      <p id={style.mail}>
        Enter your email address to register to our newsletter subscription!
      </p>
      <input
        type="email"
        className={style.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
      />
      <Button type="submit" onClick={handleSubmit}>
        Subscribe
      </Button>
    </section>
  );
}

export default Contact;
