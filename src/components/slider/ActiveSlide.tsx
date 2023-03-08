
import Image from "./Image";

import classes from "./ActiveSlide.module.css";

type TProps = {
    className: string;
    image: string;
    description: string;
}

export default function ActiveSlide(props : TProps) : JSX.Element {
  return (
    <div className={classes["active-slide"] + " " + props.className}>
      <Image image={props.image} alt={props.description} />
    </div>
  );
}