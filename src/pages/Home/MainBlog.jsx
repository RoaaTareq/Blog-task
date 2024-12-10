import React from 'react';
import '../../styles/mainblog.scss'
import CoverImage from '../Blog/CoverImage';
import Blog from '../Blog/Blog';
import Markting from '../Blog/Markting';

function MainBlog() {
    return (
        <section className="main-blog">
            <div className="main-blog__container">
                <div className='first-section' >
                   <CoverImage/>
                   <Blog/>
                </div>
               
                <div className='second-section' >
                    <Markting/>
                </div>
            </div>
        </section>
    );
}

export default MainBlog;
