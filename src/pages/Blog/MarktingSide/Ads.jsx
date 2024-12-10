import React from "react";
import '../../../styles/Ads.scss'
import Banner from '../../../assets/banner-small.png'
function Ads (){
    return(
      <section>
        <div className="container">
            
  <div className="marketing-wrapper">
    <span className="line"></span>
    <span className="text">Marketing</span>
    <span className="line"></span>
  </div>
  <img src={Banner} alt="Ads" />

        </div>
      </section>
    )
}
export default Ads