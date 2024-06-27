import Image from "./Image";

import Animate from "../../layout/Animate";

import classes from "./SlideRight.module.css";

type TProps = {
    className: string;
    image: string;
    description: string;
}

export default function SlideRight({image, description, className}: TProps ) : JSX.Element {
  return (
    <Animate className={classes["slide-right"] + " " + className} variant='SLIDE' dependency={image}>
      <Image image={image} alt={description} />
    </Animate>
  );
}
