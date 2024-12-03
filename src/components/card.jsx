import React from "react";
import Sport from '../assets/image13.png';  
import Salat from '../assets/image3.png';
import Strawbary from '../assets/image38.png';
import Woman from '../assets/image30.png';
import "../styles/Card.scss"; 

function Card() {
    return (
        <section className="card">
            <div className="container">
            <h6 className="card__related-posts-title">RELATED POSTS</h6>
            <div className="card__container">
               
               <div className="card__item">
                   <div className="card__image-container">
                       <img
                           src={Sport} 
                           alt="sport daily" 
                           className="card__image"
                       />
                       <span className="card__category">Healthy Lifestyle</span>
                   </div>
                   <div className="card__content">
                       <h3 className="card__title">Smarter Food Choices 101 Tips For Busy Women</h3>
                       <p className="card__description">
                           By <u>Ibrahim Rahhal</u>  |  Posted: 15 June 2022 
                       </p>
                   </div>
               </div>
               <div className="card__item">
                   <div className="card__image-container">
                       <img
                           src={Salat} 
                           alt="sport daily" 
                           className="card__image"
                       />
                       <span className="card__category">Healthy Lifestyle</span>
                   </div>
                   <div className="card__content">
                       <h3 className="card__title">Smarter Food Choices 101 Tips For Busy Women</h3>
                       <p className="card__description">
                           By <u>Mohammed Najjar</u>  |  Posted: 15 June 2022 
                       </p>
                   </div>
               </div>
               <div className="card__item">
                   <div className="card__image-container">
                       <img
                           src={Strawbary} 
                           alt="sport daily" 
                           className="card__image"
                       />
                       <span className="card__category">Healthy Lifestyle</span>
                   </div>
                   <div className="card__content">
                       <h3 className="card__title">Smarter Food Choices 101 Tips For Busy Women</h3>
                       <p className="card__description">
                           By UI Platform  |  Posted: 15 June 2022 
                       </p>
                   </div>
               </div>
               <div className="card__item">
                   <div className="card__image-container">
                       <img
                           src={Woman} 
                           alt="sport daily" 
                           className="card__image"
                       />
                       <span className="card__category">Healthy Lifestyle</span>
                   </div>
                   <div className="card__content">
                       <h3 className="card__title">Smarter Food Choices 101 Tips For Busy Women</h3>
                       <p className="card__description">
                           By <u> UI Platform </u> |  Posted: 15 June 2022 
                       </p>
                   </div>
               </div>
           </div>
            </div>
           
          
        </section>
    );
}

export default Card;
