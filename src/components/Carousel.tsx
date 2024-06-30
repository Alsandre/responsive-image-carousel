import React, { Children, useEffect, useState } from "react";
import { ICarousel } from "../index";
import classes from "./Carousel.module.css";

function Carousel({ children }: ICarousel): JSX.Element {
  const [slideIndex, setSlideIndex] = useState(1);

  const _listLength = Children.count(children);
  useEffect(() => {
    let interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % _listLength);
    }, 1000);
    return () => clearInterval(interval);
  }, [_listLength]);

  return (
    <div className={classes["slider-parent"]}>
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
    </div>
  );
}

export { Carousel };
