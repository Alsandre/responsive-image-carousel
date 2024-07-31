import React, { Children } from "react";
import styles from "./styles.module.css";
import { ImageSrc } from "../..";

type Props = {
  children?: React.ReactNode;
  className: string;
  index: number;
  midChildClass: string;
  allImageClass: string;
  allChildClass: string;
  imageList: ImageSrc[];
};

function RenderSingleSlideAsList({
  midChildClass,
  allImageClass,
  allChildClass,
  className,
  index,
  imageList,
}: Props) {
  return (
    <div className={`${styles["_ARIC-wrapper"]} ${className ?? ""}`}>
      <div
        className={`${styles["_ARIC-mid-child"]} ${midChildClass ?? ""} ${
          allChildClass ?? ""
        }`}
      >
        {imageList.length > 0 ? (
          <img
            className={allImageClass ?? ""}
            style={{ width: "100%", height: "100%" }}
            src={imageList[index]["imageURL"]}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
