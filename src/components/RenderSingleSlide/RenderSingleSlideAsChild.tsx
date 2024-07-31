import React, { Children } from "react";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className: string;
  index: number;
  midChildClass: string;
  allChildClass: string;
};

function RenderSingleSlideAsChild({
  midChildClass,
  allChildClass,
  className,
  index,
  children,
}: Props) {
  return (
    <div className={`${styles["_ARIC-wrapper"]} ${className ?? ""}`}>
      <div
        className={`${styles["_ARIC-mid-child"]} ${midChildClass ?? ""} ${
          allChildClass ?? ""
        }`}
      >
        {Children.toArray(children)[index]}
      </div>
    </div>
  );
}
