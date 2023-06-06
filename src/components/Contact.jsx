import React from "react";
import Button from "./Button";
import style from "../styles/modules/services.module.css";

function Contact() {
  const popUp = () => {
    alert(
      "Congratulations!!! You've Successfully Subscribed for Our Newsletter"
    );
  };

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
      <Button type="submit" onClick={popUp}>
        Subscribe for FREE
      </Button>
    </section>
  );
}

export default Contact;
