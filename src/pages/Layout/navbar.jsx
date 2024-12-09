import React from 'react'
import Logo from '../../assets/Logo.svg'
import search from '../../assets/search.svg'
import menue from '../../assets/burgermenue.svg'
import '../../styles/navbar.scss'

function Navbar() {
  return (
   <nav className='navbar'>
    <div className="container">
      <div className='navbar__main-nav'>
        <div>
          <img src={search} alt="search icon" className='navbar__search-icon' />
        </div>
        <div>
          <img src={Logo} alt="logoAtypon" className='navbar__logo-img' />
        </div>
        <div>
       <img src={menue} alt="menuebruger" className='navbar__menu-logo' />
        </div>
      </div>
    </div>
   </nav>
  )
}

export default Navbar;
