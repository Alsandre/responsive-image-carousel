import React, { Children, act, useEffect, useState } from "react";
import { ICarousel } from "../../index";
import styles from "./styles.module.css";

function AutoCarousel({
  children,
  className,
  leftChildClass,
  midChildClass,
  imageList,
  rightChildClass,
}: ICarousel): JSX.Element {
  const [leftIndex, setLeftIndex] = useState(0);
  const [midIndex, setMidIndex] = useState(1);
  const [rightIndex, setRightIndex] = useState(2);

  const _listLength = imageList ? imageList.length : Children.count(children);
  useEffect(() => {
    let interval = setInterval(() => {
      setLeftIndex((prevIndex) => (prevIndex + 1) % _listLength);
      setMidIndex((prevIndex) => (prevIndex + 1) % _listLength);
      setRightIndex((prevIndex) => (prevIndex + 1) % _listLength);
    }, 3000);
    return () => clearInterval(interval);
  }, [_listLength]);
  let key = "";
  if (!children && !imageList)
    throw new Error(
      "Setup is not complete. Either children or imageList are missing."
    );
  return (
    <div className={`${styles["_ARIC-wrapper"]} ${className ?? ""}`}>
      {children && !imageList
        ? Children.map(children, (item, index) => {
            switch (index) {
              case leftIndex: //left
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-left-child"]} ${
                      leftChildClass ?? ""
                    }`}
                  >
                    {item}
                  </div>
                );
              case midIndex: //center
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-mid-child"]} ${
                      midChildClass ?? ""
                    }`}
                  >
                    {item}
                  </div>
                );
              case rightIndex: //right
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-right-child"]} ${
                      rightChildClass ?? ""
                    }`}
                  >
                    {item}
                  </div>
                );
            }
          })
        : !children && imageList
        ? imageList.map((item, index) => {
            switch (index) {
              case leftIndex: //left
                console.log(index, "left");
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-left-child"]} ${
                      leftChildClass ?? ""
                    }`}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
              case midIndex: //center
                console.log(index, "mid");
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-mid-child"]} ${
                      midChildClass ?? ""
                    }`}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
              case rightIndex: //right
                console.log(index, "right");
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-right-child"]} ${
                      rightChildClass ?? ""
                    }`}
                  >
                    <img
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
