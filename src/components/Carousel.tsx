import React, { Children, useState } from "react";
import { ICarousel } from "../types";
import classes from "./Carousel.module.css";

function Carousel({ children }: ICarousel): JSX.Element {
  const [slideIndex, setSlideIndex] = useState(1);
  const [hasPrevSlide, setHasPrevSlide] = useState(false);
  const [hasNextSlide, setHasNextSlide] = useState(true);
  function leftClickHandler() {
    if (slideIndex === 2) {
      setSlideIndex(1);
      setHasPrevSlide(false);
    } else {
      setSlideIndex(slideIndex - 1);
      !hasNextSlide && setHasNextSlide(true);
    }
  }
  function rightClickHandler() {
    const _listLength = Children.count(children);
    if (slideIndex === _listLength - 3) {
      setSlideIndex(_listLength - 2);
      setHasNextSlide(false);
    } else {
      setSlideIndex(slideIndex + 1);
      !hasPrevSlide && setHasPrevSlide(true);
    }
  }
  return (
    <div className={classes["slider-parent"]}>
      <button
        className={classes["button-left-position1"]}
        onClick={leftClickHandler}
        disabled={!hasPrevSlide}
      >
        &lt;
      </button>
      {Children.map(children, (item, index) => {
        switch (index) {
          case slideIndex - 1: //left
            return <div className={classes["left-child"]}>{item}</div>;
          case slideIndex: //center
            return <div className={classes["active-child"]}>{item}</div>;
          case slideIndex + 1: //right
            return <div className={classes["right-child"]}>{item}</div>;
        }
      })}
      <button
        className={classes["button-right-position1"]}
        onClick={rightClickHandler}
        disabled={!hasNextSlide}
      >
        &gt;
      </button>
    </div>
  );
}

export { Carousel };
