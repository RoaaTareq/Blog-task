import React from 'react';
import Natural from '../../assets/image2.png';

function TopSection() {
    return (
        <section className="top-section"> 
            <div className="top-section__container"> 
                <img className="top-section__image" src={Natural} alt="people walking on Amazon" />
            </div>
        </section>
    );
}

export default TopSection;
