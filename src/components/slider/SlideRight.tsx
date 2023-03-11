import Image from "./Image";

import classes from "./SlideRight.module.css";

type TProps = {
    className: string;
    image: string;
    description: string;
}

export default function SlideRight(props: TProps ) : JSX.Element {
  return (
    <div className={classes["slide-right"] + " " + props.className}>
      <Image image={props.image} alt={props.description} />
    </div>
  );
}
