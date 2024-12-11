import React from 'react';
import Roaa from '../../../assets/Roaa.jpg';
import Facebook from '../../../assets/Component1.svg';
import LinkedIn from '../../../assets/Component2.svg';
import Twitter from '../../../assets/Component3.svg';
import YouTube from '../../../assets/Component4.svg';
import "../../../styles/author.scss"; // Import SCSS file

function Author() {
  return (
    <section className="author">
      <div className="author__container">
        <h4 className="author__title">ABOUT THE AUTHOR</h4>
        <div className="author__content">
          <div className="author__image-container">
            <img src={Roaa} alt="Photo of Roaa Abushaqrah" className="author__image" />
          </div>
          <div className="author__details">
            <div className="author__social-media">
              <h6 className="author__name">Roaa Abushaqrah</h6>
              <div className="author__social-icons">
                <img src={Facebook} alt="Facebook" className="author__social-icon" />
                <img src={LinkedIn} alt="LinkedIn" className="author__social-icon" />
                <img src={Twitter} alt="Twitter" className="author__social-icon" />
                <img src={YouTube} alt="YouTube" className="author__social-icon" />
              </div>
            </div>
            <div className="author__info">
              <span className="author__position">Software Engineering</span>
              <p className="author__bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;
