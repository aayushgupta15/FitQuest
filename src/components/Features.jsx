import React from "react";
import style from "../styles/modules/features.module.css";
import gymMat from "../images/gymMat.png";

function Features() {
  return (
    <section className={style.container}>
      <h2>Features & Benefits</h2>
      <strong>______________</strong>
      <div className={style.block__container}>
        {/* Features */}
        <div className={style.block}>
          <h3>Features</h3>
          <ul>
            <li>
              Personalized fitness plans tailored to individual goals and needs
            </li>
            <li>Access to state-of-the-art fitness equipment and facilities</li>
            <li>
              Support and guidance from experienced and certified fitness
              professionals
            </li>
            <li>Fun and engaging exercise classes for all fitness levels</li>
            <li>
              Nutritional counselling and guidance to enhance overall health and
              wellness
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className={style.block}>
          <h4>Benefits</h4>
          <ul>
            <li>Improved physical fitness and strength</li>
            <li>Enhanced overall well-being and mental health</li>
            <li>Increased energy and stamina</li>
            <li>Better quality of sleep</li>
            <li>Improved immune system function</li>
          </ul>
        </div>
        <img src={gymMat} alt="NA" />
      </div>
    </section>
  );
}

export default Features;
