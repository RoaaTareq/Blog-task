import React from 'react';
import Intro from './Blogsection/intro';
import Abstract from './Blogsection/Abstract';
import SubSection from './Blogsection/subsection';
import Conclusion from './Blogsection/Conclusion';
import Charts from './Blogsection/Chart';
import TagsBlogs from './Blogsection/TagsBlog';
import CardBlog from './Blogsection/CardBolg';
import Author from './Blogsection/Auther';

function Blog() {
    return (
        <section className="blog">
            <div className="blog__container">
            <Intro/>
            <Abstract/>
            <SubSection/>
            <Charts/>
            <Conclusion/>
            <TagsBlogs/>
            <CardBlog/>
            <Author/>

              

              

               

                

               
            </div>
        </section>
    );
}

export default Blog;
