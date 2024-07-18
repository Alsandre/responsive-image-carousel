import React, { Children, useEffect, useState } from "react";
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
  allImageClass,
  showSingleSlide = false,
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
  if (showSingleSlide) {
    return (
      <div className={`${styles["_ARIC-wrapper"]} ${className ?? ""}`}>
        {children && !imageList ? (
          <div
            className={`${styles["_ARIC-mid-child"]} ${midChildClass ?? ""} ${
              allChildClass ?? ""
            }`}
          >
            {Children.toArray(children)[leftIndex]}
          </div>
        ) : !children && imageList ? (
          <div
            className={`${styles["_ARIC-mid-child"]} ${midChildClass ?? ""} ${
              allChildClass ?? ""
            }`}
          >
            {imageList.length > 0 ? (
              <img
                className={allImageClass ?? ""}
                style={{ width: "100%", height: "100%" }}
                src={imageList[leftIndex]["imageURL"]}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

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
                    } ${allChildClass ?? ""}`}
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
                    } ${allChildClass ?? ""}`}
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
                    } ${allChildClass ?? ""}`}
                  >
                    {item}
                  </div>
                );
            }
          })
        : !children
        ? imageList.map((item, index) => {
            switch (index) {
              case leftIndex: //left
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-left-child"]} ${
                      leftChildClass ?? ""
                    }  ${allChildClass ?? ""}`}
                  >
                    <img
                      className={allImageClass ?? ""}
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
              case midIndex: //center
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-mid-child"]} ${
                      midChildClass ?? ""
                    } ${allChildClass ?? ""}`}
                  >
                    <img
                      className={allImageClass ?? ""}
                      style={{ width: "100%", height: "100%" }}
                      src={item.imageURL}
                      alt=""
                    />
                  </div>
                );
              case rightIndex: //right
                return (
                  <div
                    key={key + index}
                    className={`${styles["_ARIC-right-child"]} ${
                      rightChildClass ?? ""
                    } ${allChildClass ?? ""}`}
                  >
                    <img
                      className={allImageClass ?? ""}
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
