import React, { Children, act, useEffect, useState } from "react";
import { ICarousel } from "../../index";
import styles from "./styles.module.css";

function AutoCarousel({
  children,
  className,
  leftChildClass,
  activeChildClass,
  imageList,
  rightChildClass,
}: ICarousel): JSX.Element {
  const [slideIndex, setSlideIndex] = useState(1);

  const _listLength = imageList ? imageList.length : Children.count(children);
  useEffect(() => {
    let interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % _listLength);
    }, 1000);
    return () => clearInterval(interval);
  }, [_listLength]);
  if (!children && !imageList)
    throw new Error(
      "Setup is not complete. Either children or imageList are missing."
    );
  return (
    <div className={`${styles["slider-parent"]} ${className ?? ""}`}>
      {children && !imageList
        ? Children.map(children, (item, index) => {
            switch (index) {
              case slideIndex - 1: //left
                return <div className={leftChildClass ?? ""}>{item}</div>;
              case slideIndex: //center
                return <div className={activeChildClass ?? ""}>{item}</div>;
              case slideIndex + 1: //right
                return <div className={rightChildClass ?? ""}>{item}</div>;
            }
          })
        : !children && imageList
        ? imageList.map((item, index) => {
            switch (index) {
              case slideIndex - 1: //left
                return (
                  <div className={leftChildClass ?? ""}>
                    <img
                      key={index}
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
              case slideIndex: //center
                return (
                  <div className={activeChildClass ?? ""}>
                    <img
                      key={index}
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
              case slideIndex + 1: //right
                return (
                  <div className={rightChildClass ?? ""}>
                    <img
                      key={index}
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
            }
          })
        : "mamasita"}
    </div>
  );
}

export { AutoCarousel };
