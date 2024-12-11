import React from "react";
import '../../../styles/AdsBlog.scss'
import Banner from '../../../assets/banner-big.svg'
function Ads (){
    return(
      <section>
        <div className="container">
            
  <div className="marketing-wrapper-blog">
    <span className="line"></span>
    <span className="text">Marketing</span>
    <span className="line"></span>
  </div>
  <img src={Banner} alt="Ads" className="banner-blog" />

        </div>
      </section>
    )
}
export default Ads