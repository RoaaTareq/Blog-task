import React from "react";
import '../../../styles/lastpost.scss'
import ImageOne from '../../../assets/1.svg'
import ImageTwo from '../../../assets/2.svg'
import ImageThree from '../../../assets/3.svg'
 
function Post (){
    return(
      <section className="last-post-section">
        <div className="container">
         <div className="wrapfilter">
            <div>Leates</div>
            <div>Poupler</div>
            <div>Trending</div>
         </div>
         <div className="wrapp-blogs">
            <div className="blog-content">
           
                <img src={ImageOne} alt="imageone" />
                <div className="auther">
                <h1 className="blog-title">Smarter Food Choices 101 Tips For Busy Women</h1>
                <span className="author-title">By Iasonas Georg... | 15 June 2019</span>
                </div>
                </div>
            
            <div  className="blog-content">
                <img src={ImageTwo} alt="imagetwo" />
                <div className="auther">
                <h1 className="blog-title">Beautiful and Creative Editing Photos by Egzon Muliqi</h1>
                <span className="author-title">By Iasonas Georg... | 15 June 2019</span>
                </div>
            </div>
            <div  className="blog-content">
                <img src={ImageThree} alt="" />
              <div className="auther">
              <h1 className="blog-title">Beautiful Surreal Figurative Artwork by Aykut Aydogdu and...</h1>
              <span className="author-title">By Iasonas Georg... | 15 June 2019</span>
              </div>
            </div>
            <div  className="blog-content">
                <img src={ImageThree} alt="" />
                <div className="auther">
                <h1 className="blog-title">Smarter Food Choices 101 Tips For Busy Women</h1>
                <span className="author-title">By Iasonas Georg... | 15 June 2019</span>
                </div>
            </div>

         </div>
        </div>
      </section>
    )
}
export default Post