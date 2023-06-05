import React from "react";
import style from "../styles/modules/hero.module.css";
import Button from "./Button";
import hero from "../images/hero.webp";

function HeroSection() {
  return (
    <section className={style.container} id="home">
      <div className={style.right}>
        <div>
          <h1>Get Fit with FitQuest's Experts</h1>
          <p>
            Welcome to FitQuest, where our experienced fitness professionals are
            dedicated to helping you achieve your health and wellness goals with
            a wide range of programs and services!
          </p>
        </div>
        <Button type="button" value="Learn More" variant="primary" />
      </div>
      <img src={hero} alt="NA" />
    </section>
  );
}

export default HeroSection;
