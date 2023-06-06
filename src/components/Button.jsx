import React, { Children } from "react";
import { getClasses } from "../utils/getClasses";
import style from "../styles/modules/button.module.css";

const buttonType = {
  primary: "primary",
  secondary: "secondary",
};

function Button({ children, variant = "primary", type, ...rest }) {
  return (
    <button
      className={getClasses([style.button, style[`${buttonType[variant]}`]])}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
