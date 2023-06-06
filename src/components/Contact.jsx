import React from "react";
import Button from "./Button";
import style from "../styles/modules/services.module.css";

function Contact() {
  return (
    <section className={style.container}>
      <h2>Stay In Touch</h2>
      <hr />
      <p id={style.mail}>
        Enter your email address to register to our newsletter subscription!
      </p>
      <input
        type="text"
        placeholder="Enter your email"
        className={style.input}
      />
      <Button type="submit">Subscribe for FREE</Button>
    </section>
  );
}

export default Contact;
