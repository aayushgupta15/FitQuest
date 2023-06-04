import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <div>
      <h3>Stay In Touch</h3>
      <p>
        Enter your email address to register to our newsletter subscription!
      </p>
      <input type="text" placeholder="Enter your email" />
      <Button type="submit" value="Submit" />
    </div>
  );
}

export default Contact;
