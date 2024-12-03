import React from 'react';
import Chart from '../../../assets/image4.jpg';
import Qouat from '../../../assets/Quote.svg';
import Quote_2 from '../../../assets/Quote_2.svg';

function Charts() {
    return (
    
              

              
                

          
                <div className="blog__quote-section">
                    <div className="blog__quote">
                        <img className="blog__quote-icon" src={Qouat} alt="Quote" />
                        <p className="blog__quote-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque
                        </p>
                        <img className="blog__quote-icon" src={Quote_2} alt="Quote" />
                    </div>

                    <div className="blog__chart">
                        <img className="blog__chart-image" src={Chart} alt="Chart" />
                    </div>
                </div>

              
    );
}

export default Charts;
