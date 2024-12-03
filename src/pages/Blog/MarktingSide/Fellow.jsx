import React from "react";
import Facebook from '../../../assets/Component9.svg';
import Twitter from '../../../assets/Component11.svg';
import YouTube from '../../../assets/Component10.svg';
import Linkedin from '../../../assets/Component12.svg';

function Fellow() {
    return (
        <section className="fellow">
            <div className="fellow__container">
                <h6 className="fellow__title">Fellow</h6>
                <div className="fellow__social-icons">
                    <img className="fellow__social-icon" src={Facebook} alt="facebook" />
                    <img className="fellow__social-icon" src={Twitter} alt="twitter" />
                    <img className="fellow__social-icon" src={YouTube} alt="youtube" />
                    <img className="fellow__social-icon" src={Linkedin} alt="linkedin" />
                </div>
            </div>
        </section>
    );
}

export default Fellow;
