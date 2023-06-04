import React from "react";
import style from "../styles/modules/services.module.css";
import meditation from "../images/meditation.png";
import food from "../images/food.png";
import fit from "../images/fit.png";

function Services() {
  return (
    <section className={style.container}>
      <h2>Services YOU can avail</h2>
      <strong>______________</strong>
      <div className={style.card__container}>
        <div className={style.card}>
          <img src={meditation} alt="NA" />
          <h4>Zen Out with Yoga & Meditation</h4>
          <p>
            Our yoga and meditation classes are perfect for anyone who wants to
            connect with themselves and find inner peace in a welcoming and
            relaxed environment.
          </p>
        </div>
        <div className={style.card}>
          <img src={food} alt="NA" />
          <h4>Food Coach: Eat Better, Feel Better</h4>
          <p>
            Need help with your diet? Let's chat! As a registered dietitian, I
            can help you create a plan that works for you and your lifestyle.
          </p>
        </div>
        <div className={style.card}>
          <img src={fit} alt="NA" />
          <h4>Get Fit at FitQuest Gym!</h4>
          <p>
            Looking to get fit? Come to our gym for a great workout - we've got
            everything you need to reach your fitness goals!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
