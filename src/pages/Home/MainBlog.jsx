import React from 'react';
import '../../styles/mainblog.scss'
import CoverImage from '../Blog/CoverImage';
import Blog from '../Blog/Blog';
import Markting from '../Blog/Markting';

function MainBlog() {
    return (
        <section className="main-blog">
            <div className="main-blog__container">
                <div className="main-blog__col main-blog__col--1">
                   <CoverImage/>
                </div>
                <div className="main-blog__col main-blog__col--2">
                   <Blog/>
                </div>
                <div className="main-blog__col main-blog__col--3">
                    <Markting/>
                </div>
            </div>
        </section>
    );
}

export default MainBlog;
