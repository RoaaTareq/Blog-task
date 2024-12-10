import React from 'react';
import Twitter from '../../assets/Component11.svg';
import LinkedIn from '../../assets/Component10.svg';
import Facebook from '../../assets/Component9.svg';
import Reddit from '../../assets/Component13.svg';
import Mail from '../../assets/Component12.svg';
import "../../styles/coverimage.scss";

function CoverImage() {
    return (
        <section className="cover-image">
            <div className="cover-image__container">
                <div className="cover-image__description">
                    <p className="cover-image__description-text">
                        <b className="cover-image__bold">Cover Image:</b> A stripy monarch caterpillar (Danaus plexippus) gorges on a butterfly milkweed. Photo by: Sarah Mac Farland.
                    </p>
                    <p className="cover-image__description-text">
                        <b className="cover-image__bold">Photo by:</b> Sarah Mac Farland
                    </p>
                </div>
                <div className="cover-image__social-icons">
                    <h4 className="cover-image__followers">1K</h4>
                    <span className="cover-image__shares">Shares</span>
                    <hr className="cover-image__divider" />
                    <div className="cover-image__social-links">
                        <img className="cover-image__social-icon" src={Twitter} alt="Twitter" />
                        <img className="cover-image__social-icon" src={LinkedIn} alt="LinkedIn" />
                        <img className="cover-image__social-icon" src={Facebook} alt="Facebook" />
                        <img className="cover-image__social-icon" src={Reddit} alt="Reddit" />
                        <img className="cover-image__social-icon" src={Mail} alt="Mail" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoverImage;
