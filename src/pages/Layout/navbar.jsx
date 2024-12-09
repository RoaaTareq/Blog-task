import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import search from "../../assets/search.svg";
import menue from "../../assets/burgermenue.svg";
import Arrow from '../../assets/OpenInNew.svg';
import "../../styles/navbar.scss";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__main-nav">
          <div className="navbar__menue-wrap">
            <img src={menue} alt="Menu icon" className="navbar__menu-logo" />
            <div className="navbar__switch-wrapper">
              <div className="navbar__switch">
                <input id="language-toggle" className="navbar__check-toggle navbar__check-toggle-round-flat" type="checkbox" />
                <label htmlFor="language-toggle"></label>
                <span className="navbar__switch-on">EN</span>
                <span className="navbar__switch-off">ع</span>
              </div>
            </div>
          </div>

          <div>
            <img src={Logo} alt="Atypon logo" className="navbar__logo-img" />
          </div>
          <div className="navbar__main-nav">
            <div>
              <img src={search} alt="Search icon" className="navbar__search-icon" />
            </div>
          </div>
        </div>
      </div>

      <ul className="navbar__nav-list">
        <li className="navbar__nav-list-item">Healthy Lifestyle</li>
        <li className="navbar__nav-list-item">Chronic diseases</li>
        <li className="navbar__nav-list-item">Women’s health</li>
        <li className="navbar__nav-list-item">Mental health</li>

        
        <li className="navbar__nav-list-item navbar__nav-list-item--more">
          <div className="navbar__select-wrapper">
            <select className="navbar__select" id="more-dropdown" aria-label="More options">
              <option className="navbar__select-option" value="">More</option>
              <option className="navbar__select-option" value="">About </option>
            </select>
          </div>
        </li>

       
        <li className="navbar__nav-dropdown-item">
          Health Education publications <img src={Arrow} alt="Open in new tab" className="navbar__arrow-icon" />
        </li>
      </ul>

      <hr className="navbar__web-border" />
    </nav>
  );
}

export default Navbar;
