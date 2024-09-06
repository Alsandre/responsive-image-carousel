import React, { Children, ReactNode, useEffect, useState } from "react";
import { ICarousel } from "../index";
import classes from "./styles.module.css";
import { Chevron, ECHevronDirections } from "./icons/Chevron";

function Carousel({
  children,
  className,
  slideAnimation,
  sliderSpeed = 3000,
  imageList = [],
  slidesPerScreen = 3,
  imageClass,
  style,
  controls,
  buttonIcon = null,
  btnClassName,
}: ICarousel): JSX.Element {
  const [index, setIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const imageNodes =
    imageList.length !== 0
      ? (imageList.map(({ imageURL }) => (
          <img
            className={imageClass ?? ""}
            style={{ width: "100%", height: "100%" }}
            src={imageURL}
            alt=""
          />
        )) as ReactNode[])
      : Children.map(children, (child) => (
          <div className={`${classes.animate} ${slideAnimation ?? ""}`}>
            {child}
          </div>
        )) || [];

  const _listLength =
    imageList.length !== 0 ? imageList.length : Children.count(children);
  useEffect(() => {
    let interval: number;
    if (!isCarouselHovered) {
      interval = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex + slidesPerScreen >= _listLength
            ? 0
            : (prevIndex + 1) % _listLength
        );
      }, sliderSpeed);
    }
    return () => {
      clearInterval(interval);
    };
  }, [_listLength, isCarouselHovered, sliderSpeed, slidesPerScreen]);

  const handleLeft = () =>
    setIndex((prevIndex) =>
      prevIndex - 1 < 0
        ? _listLength - slidesPerScreen
        : prevIndex - 1
    );

  const handleRight = () =>
    setIndex((prevIndex) =>
      prevIndex + slidesPerScreen >= _listLength
        ? 0
        : (prevIndex + 1) % _listLength
    );

  if (!children && !imageList)
    throw new Error(
      "Setup is not complete. Either children or imageList are missing."
    );

  return (
    <div
      className={`${classes["_ARIC-wrapper"]} ${className ? className : ""}`}
      style={style}
      onMouseEnter={() => setIsCarouselHovered(true)}
      onMouseLeave={() => setIsCarouselHovered(false)}
    >
      {controls && (
        <button
          className={`${classes["btn-left"]}${btnClassName ?? ""}`}
          onClick={handleLeft}
        >
          {buttonIcon ?? <Chevron variant={ECHevronDirections.LEFT} />}
        </button>
      )}
      {controls && (
        <button
          className={`${classes["btn-right"]}${btnClassName ?? ""}`}
          onClick={handleRight}
        >
          {buttonIcon ?? <Chevron variant={ECHevronDirections.RIGHT} />}
        </button>
      )}
      {imageNodes.slice(index, index + slidesPerScreen)}
    </div>
  );
}

export { Carousel };
