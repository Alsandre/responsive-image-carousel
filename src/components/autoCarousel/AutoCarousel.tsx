import React, { Children, ReactNode, useEffect, useState } from "react";
import { ICarousel } from "../../index";
import styles from "./styles.module.css";

function AutoCarousel({
  children,
  className,
  allChildClass,
  leftChildClass,
  midChildClass,
  imageList = [],
  rightChildClass,
  slidesPerScreen = 3,
  imageClass,
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
      : Children.toArray(children);

  const _listLength =
    imageList.length !== 0 ? imageList.length : Children.count(children);
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + slidesPerScreen >= _listLength
          ? 0
          : (prevIndex + 1) % _listLength
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [_listLength]);

  if (!children && !imageList)
    throw new Error(
      "Setup is not complete. Either children or imageList are missing."
    );

  return <>{imageNodes.slice(index, index + slidesPerScreen)}</>;
}

export { AutoCarousel };
