import React from "react";
import Actor from "../../../assets/Maskgroup.svg"; 
import vector from '../../../assets/Vector.svg' 
import Calender from '../../../assets/Calendar.svg'
import View from '../../../assets/View.svg'
import '../../../styles/about.scss'

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h6 className="about__title">About</h6>
        <hr className="about__divider" />
        <div className="about__content">
          <div className="about__image-container">
            <img src={Actor} alt="Abdallah Qoraan" className="about__image" />
          </div>
          <div className="about__info">
            <h6 className="about__name">Abdallah Qoraan</h6>
            <span className="about__position">Software Engineer</span>
          </div>
        </div>
        <ul className="about__stats">
          <li className="about__stat">
            <img src={Calender} alt="Date" className="about__stat-icon" /> October 1, 2022
          </li>
          <li className="about__stat">
            <img src={vector} alt="Shared posts" className="about__stat-icon" /> 1K Shares
          </li>
          <li className="about__stat">
            <img src={View} alt="Views" className="about__stat-icon" />5K Views
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
