import React, { useState } from "react";
import Sport from '../assets/image13.png';  
import Salat from '../assets/image3.png';
import Strawbary from '../assets/image38.png';
import Woman from '../assets/image30.png';
import "../styles/Card.scss"; 

function Slider() {
    // State to track the current index of the slide
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            image: Sport,
            category: "Healthy Lifestyle",
            title: "Smarter Food Choices 101 Tips For Busy Women",
            description: "By Ibrahim Rahhal | Posted: 15 June 2022"
        },
        {
            image: Salat,
            category: "Healthy Lifestyle",
            title: "Smarter Food Choices 101 Tips For Busy Women",
            description: "By Mohammed Najjar | Posted: 15 June 2022"
        },
        {
            image: Strawbary,
            category: "Healthy Lifestyle",
            title: "Smarter Food Choices 101 Tips For Busy Women",
            description: "By UI Platform | Posted: 15 June 2022"
        },
        {
            image: Woman,
            category: "Healthy Lifestyle",
            title: "Smarter Food Choices 101 Tips For Busy Women",
            description: "By UI Platform | Posted: 15 June 2022"
        }
    ];

    const moveSlide = (step) => {
        let newIndex = currentIndex + step;
        if (newIndex < 0) newIndex = cards.length - 1;
        if (newIndex >= cards.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="slider-container">
            <div className="slider">
                <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="card__image-container">
                                <img src={card.image} alt="related post" className="card__image" />
                                <span className="card__category">{card.category}</span>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title">{card.title}</h3>
                                <p className="card__description">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Navigation: Arrows and Dots */}
            <div className="navigation">
                <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                <div className="dots">
                    {cards.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
            </div>
        </section>
    );
}

export default Slider;
