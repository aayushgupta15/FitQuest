import React from "react";
import style from "../styles/modules/services.module.css";
import { getClasses } from "../utils/getClasses";
import one from "../images/one.png";

import two from "../images/two.png";
import three from "../images/three.png";

function Clients() {
  return (
    <section className={getClasses([style.container, style.container__color])}>
      <h2>What My Clients Say</h2>
      <hr />
      <div className={style.card__container}>
        <div className={getClasses([style.card, style.person])}>
          <img src={one} alt="NA" />
          <p>
            FitQuest is the perfect fitness company for anyone looking to
            improve their overall health and wellness.
          </p>
        </div>
        <div className={getClasses([style.card, style.person])}>
          <img src={two} alt="NA" />
          <p>
            FitQuest offers a wide range of services and programs that are both
            effective and enjoyable, making it easy to maintain a healthy
            lifestyle.
          </p>
        </div>
        <div className={getClasses([style.card, style.person])}>
          <img src={three} alt="NA" />
          <p>
            The certified fitness professionals at FitQuest provided me with the
            guidance and motivation I needed to achieve my fitness goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clients;
