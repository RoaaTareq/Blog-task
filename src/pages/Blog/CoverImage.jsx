import React from 'react';
import Tiwtter from '../../assets/twitter.svg';
import LinkdIn from '../../assets/Shape.svg';
import FaceBook from '../../assets/Facebook.svg';
import Riddt from '../../assets/Reddit.svg';
import Mail from '../../assets/Mail.svg';
import "../../styles/coverimage.scss"; // Assuming the SCSS is in the same directory as the component

function CoverImage() {
    return (
        <section className="cover-image">
            <div className="cover-image__container">
                <div className="cover-image__description">
                    <p>
                        <b>Cover Image:</b> A stripy monarch caterpillar (Danaus plexippus) gorges on a butterfly milkweed. Photo by: Sarah Mac Farland.<b> Photo by:</b> Sarah Mac Farland
                    </p>
                </div>
                <div className="cover-image__social-icons">
                    <h4 className="cover-image__followers">1K</h4>
                    <div className="cover-image__social-links">
                        <img className="cover-image__social-icon" src={Tiwtter} alt="Twitter" />
                        <img className="cover-image__social-icon" src={LinkdIn} alt="LinkedIn" />
                        <img className="cover-image__social-icon" src={FaceBook} alt="Facebook" />
                        <img className="cover-image__social-icon" src={Riddt} alt="Reddit" />
                        <img className="cover-image__social-icon" src={Mail} alt="Mail" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoverImage;
