import React from "react";
import "../styles/Footer.scss";
import Back from '../assets/backtotop.svg'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
        });
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                    <ul className="footer__list">
                        <li className="footer__item">ABOUT</li>
                        <li className="footer__item">ANNOUNCEMENTS</li>
                        <li className="footer__item">NEWS</li>
                        <li className="footer__item">VIDEOS</li>
                        <li className="footer__item">CONTACT US</li>
                    </ul>
                </div>
                <p className="footer__text">Atypon © 2022 all rights reserved</p>

                {/* Back to Top Button */}
                <button className="footer__back-to-top" onClick={scrollToTop}>
                  <img src={Back} alt="UPArrow" />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
