import React from 'react';
import Roaa from '../../../assets/Roaa.jpg';
import Facebook from '../../../assets/Component1.svg';
import LinkeIn from '../../../assets/Component2.svg';
import Tiwitter from '../../../assets/Component3.svg';
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
                <img src={Facebook} alt="Facebook" className="author__social-icon" />
                <img src={LinkeIn} alt="LinkedIn" className="author__social-icon" />
                <img src={Tiwitter} alt="Twitter" className="author__social-icon" />
                <img src={YouTube} alt="YouTube" className="author__social-icon" />
              </div>
            <div className="author__info">
              <h6 className="author__name">Roaa Abushaqrah</h6>
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
