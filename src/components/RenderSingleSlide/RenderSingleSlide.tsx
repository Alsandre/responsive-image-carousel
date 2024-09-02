import React, { Children, ReactNode } from "react";
import styles from "./styles.module.css";
import { ImageSrc } from "../..";

type Props = {
  className?: string;
  index: number;
  childClass?: string;
  imageClass?: string;
  imageList: ReactNode[];
};

export function RenderSingleSlide({
  childClass,
  imageClass,
  className,
  index,
  imageList,
}: Props) {
  return (
    <div className={`${styles["_ARIC-wrapper"]} ${className ?? ""}`}>
      <div className={`${styles["_ARIC-mid-child"]} ${childClass ?? ""}`}>
        {imageList[index]}
      </div>
    </div>
  );
}
