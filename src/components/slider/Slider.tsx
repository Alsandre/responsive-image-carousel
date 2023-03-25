import { useContext, useState } from "react";

import { SliderContext } from "../../context/slider-context";

import SlideLeft from "./SlideLeft";
import ActiveSlide from "./ActiveSlide";
import SlideRight from "./SlideRight";

import SliderButton from "../controls/SliderButton";

import classes from "./Slider.module.css";
import { IMAGE_LIST } from "../../constants";

export default function Slider(): JSX.Element {
  const { sliderState } = useContext(SliderContext);

  const [state, setState] = useState<number>(1);
  const rightClickHandler = (): void => {
    if (state === IMAGE_LIST.length - 2) {
      setState(1);
    } else {
      setState(state + 1);
    }
  };
  const leftClickHandler = (): void => {
    if (state === 1) {
      setState(IMAGE_LIST.length - 2);
    } else {
      setState(state - 1);
    }
  };

  return (
    <div className={classes["slider-parent"]}>
      <SlideLeft
        description=""
        image={sliderState.imageCollection[state - 1].imageURL}
        className={classes["left-child"]}
      />
      <ActiveSlide
        description=""
        image={sliderState.imageCollection[state].imageURL}
        className={classes["active-child"]}
      />
      <SlideRight
        description=""
        image={sliderState.imageCollection[state + 1].imageURL}
        className={classes["right-child"]}
      />
      <SliderButton
        direction="<"
        className={classes[sliderState.controlsVariant.left]}
        onClick={leftClickHandler}
      />
      <SliderButton
        direction=">"
        className={classes[sliderState.controlsVariant.right]}
        onClick={rightClickHandler}
      />
    </div>
  );
}
