
import Image from "./Image";

import Animate from "../../layout/Animate";
import classes from "./ActiveSlide.module.css";
import { useEffect, useState } from "react";

type TProps = {
    className: string;
    image: string;
    description: string;
}

export default function ActiveSlide({image, className, description} : TProps) : JSX.Element {
  // const [animationState, setAnimationState] = useState('');
  
  // useEffect(() => {
  //   setAnimationState(animate.slide)
  //   const slideAnimateCleaner = setTimeout(() => {
  //     setAnimationState('')
  //   }, 500);
  //   return () => {
  //     clearTimeout(slideAnimateCleaner);
  //   }
  // }, [image])
  return (
    <Animate className={classes["active-slide"] + " " + className} variant='SLIDE' dependency={image}>
      <Image image={image} alt={description} />
    </Animate>
  );
}