import React from "react";
import '../../../styles/tags.scss'

function Tags() {
  return (
    <section className="tags">
      <div className="tags__container">
        <h6 className="tags__title">TAGS</h6>
        <div className="tags__list">
          <div className="tags__group">
            <span className="tags__item">Tag 1</span>
            <span className="tags__item">Tag 2</span>
            <span className="tags__item">Tag 3</span>
            <span className="tags__item">Tag 4</span>
          </div>
          <div className="tags__group">
            <span className="tags__item">Tag 5</span>
            <span className="tags__item">Tag 6</span>
            <span className="tags__item">Tag 7</span>
            <span className="tags__item">Tag 8</span>
          </div>
          <div className="tags__group">
            <span className="tags__item">Tag 9</span>
            <span className="tags__item">Tag 10</span>
            <span className="tags__item">Tag 11</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tags;
