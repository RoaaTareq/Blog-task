import React from "react";
import Roaa from "../../../assets/Roaa.jpg";  
import '../../../styles/about.scss'

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h6 className="about__title">About</h6>
        <hr className="about__divider" />
        <div className="about__content">
          <div className="about__image-container">
            <img src={Roaa} alt="Roaa Abu-sharah" className="about__image" />
          </div>
          <div className="about__info">
            <h6 className="about__name">Roaa Abu-sharah</h6>
            <span className="about__position">Software Engineer</span>
          </div>
        </div>
        <ul className="about__stats">
          <li className="about__stat">
            <img src="" alt="Date" className="about__stat-icon" /> October
          </li>
          <li className="about__stat">
            <img src="" alt="Shared posts" className="about__stat-icon" /> 1K shared
          </li>
          <li className="about__stat">
            <img src="" alt="Views" className="about__stat-icon" /> View
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
