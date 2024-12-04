import React from "react";
import "../../../styles/cardblog.scss";
import RightArrow from "../../../assets/ArrowRight.svg";

function CardBlog() {
  return (
    <section className="card-blog">
      <div className="card-blog__container">
        <div className="card-blog__item">
          <div className="card-blog__content">
            <img src={RightArrow} alt="Arrow" className="card-blog__icon" />
            <div>
            <h6 className="card-blog__title">Previous post</h6>
            <p className="card-blog__description">Beautiful and Creative Editing Photos by Egz...</p>
            </div>
          </div>
        </div>
        <div className="card-blog__item">
          <div className="card-blog__content">
            <img src={RightArrow} alt="Arrow" className="card-blog__icon" />
           <div>
           <h6 className="card-blog__title">Next post</h6>
           <p className="card-blog__description">Grilling Tips For The Dog Days Of Summer...</p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardBlog;
