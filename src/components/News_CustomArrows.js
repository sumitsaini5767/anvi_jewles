import * as React from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="news-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="news-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="news-button-group1 ">
      {/* <div>Current slide is {currentSlide}</div> */}
      <button class="news-btns nf-prev-btn " onClick={() => previous()}><AiOutlineArrowLeft></AiOutlineArrowLeft></button>
      <button class="news-btns nf-next-btn " onClick={() => next()}><AiOutlineArrowRight></AiOutlineArrowRight></button>
      {/* <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button> */}
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};