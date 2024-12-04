import React from 'react';
import Tiwtter from '../../assets/Component11.svg';
import LinkdIn from '../../assets/Component10.svg';
import FaceBook from '../../assets/Component9.svg';
import Riddt from '../../assets/Component13.svg';
import Mail from '../../assets/Component12.svg';
import "../../styles/coverimage.scss";

function CoverImage() {
    return (
        <section className="cover-image">
            <div className="cover-image__container">
                <div className="cover-image__description">
                    <p>
                        <b>Cover Image:</b> A stripy monarch caterpillar (Danaus plexippus) gorges on a butterfly milkweed. Photo by: Sarah Mac Farland.
                    </p>
                    <p>
                        <b>Photo by:</b> Sarah Mac Farland
                    </p>
                </div>
                <div className="cover-image__social-icons">
                    <h4 className="cover-image__followers">1K</h4>
                    <span>Shares</span>
                    <hr />
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
