import React from 'react';
import '../../../styles/Introductionblog.scss'; // Importing the SCSS file

function Intro() {
    return (
        <div className="blog__intro">
            <p className="blog__intro-text">
                <span className="blog__intro-first-letter">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet,
            </p>
            <p className="blog__intro-text">
                consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate.
            </p>
        </div>
    );
}

export default Intro;
