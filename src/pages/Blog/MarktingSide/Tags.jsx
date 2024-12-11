import React from "react";
import '../../../styles/tags.scss'

function Tags() {
  return (
    <section className="tags">
      <div className="tags__container">
        <h6 className="tags__title">TAGS</h6>
        <div className="tags__list">
          <div className="tags__group">
            <span className="tags__item">Health</span>
            <span className="tags__item">Life </span>
            <span className="tags__item">Women</span>
            <span className="tags__item">Men</span>
          </div>
          <div className="tags__group">
            <span className="tags__item">Family’s Health</span>
            <span className="tags__item">Nutrition</span>
            <span className="tags__item">Kids</span>
           
          </div>
          <div className="tags__group">
            <span className="tags__item">Diseases</span>
            <span className="tags__item">Habits</span>
            <span className="tags__item">Healty</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tags;
