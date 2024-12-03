import React from "react";
import "../styles/Footer.scss"; // Import the SASS file for styling

function Footer() {
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
            </div>
        </footer>
    );
}

export default Footer;
