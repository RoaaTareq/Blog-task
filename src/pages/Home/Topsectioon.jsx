import React from 'react';
import Natural from '../../assets/image2.png';
import '../../styles/main.scss'
import Down from '../../assets/Down.svg'

function TopSection() {
    return (
        <section className="top-section">
            <div className="top-section__container">
                <img 
                    className="top-section__image" 
                    src={Natural} 
                    alt="people walking on Amazon" 
                />
               <div className='top-section__flex'>
               <span className="top-section__category">healthy lifestyle</span>
               <h1 className="top-section__title">Could walking help lower cancer risk?</h1>
               <img src={Down} alt="Down" className='top-section__arrow' />
               </div>
            </div>
        </section>
    );
}

export default TopSection;
