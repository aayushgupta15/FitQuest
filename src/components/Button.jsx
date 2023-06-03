import React from "react";
import { getClasses } from "../utils/getClasses";
import style from "../styles/modules/button.module.css";

function Button(props) {
  const buttonType = {
    primary: "primary",
    secondary: "secondary",
  };

  return (
    <div>
      <input
        type={props.type}
        className={getClasses([
          style.button,
          style[`${buttonType[props.variant]}`],
        ])}
        value={props.value}
      />
    </div>
  );
}

export default Button;
