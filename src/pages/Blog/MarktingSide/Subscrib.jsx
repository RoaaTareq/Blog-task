import React from "react";
import "../../../styles/subscribe.scss";
import Mail from "../../../assets/Mail-icon.svg";
function Subscribe() {
    return (
        <section>
            <div className="container">
                <div className="subcribe">
                    <div className="wrapp-title">
                        <img src={Mail} alt="Mailimage" />
                        <h1>
                            Subscribe to our<b>Newsletter</b>
                        </h1>
                    </div>
                    <p className="text-email">No spam, notifications only about new products, update</p>
                    <div className="wrapp-email">
               <input type="email" name="" id="" className="input-email" placeholder="Enter your Email" />
               <button className="btn-submit">Submit</button>
               </div>
                </div>
              
            </div>
        </section>
    );
}
export default Subscribe;
