import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ICarousel } from "../../index";
import classes from "./styles.module.css";

function AutoCarousel({
  children,
  className,
  slideAnimation,
  sliderSpeed = 3000,
  imageList = [],
  slidesPerScreen = 3,
  imageClass,
  style,
}: ICarousel): JSX.Element {
  const [index, setIndex] = useState(0);
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
    let interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + slidesPerScreen >= _listLength
          ? 0
          : (prevIndex + 1) % _listLength
      );
    }, sliderSpeed);
    return () => {
      clearInterval(interval);
    };
  }, [_listLength]);

  if (!children && !imageList)
    throw new Error(
      "Setup is not complete. Either children or imageList are missing."
    );

  return (
    <div
      className={`${classes["_ARIC-wrapper"]} ${className ? className : ""}`}
      style={style}
    >
      {imageNodes.slice(index, index + slidesPerScreen)}
    </div>
  );
}

export { AutoCarousel };
