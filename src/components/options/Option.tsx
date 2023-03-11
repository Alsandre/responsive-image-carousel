import { ChangeEvent, useContext } from "react";

import { SliderContext } from "../../context/slider-context";

import classes from "./Option.module.css";

type OptionType = {
  variant: string;
  options: string[];
};

export default function Option(props: OptionType): JSX.Element {
  const {setSliderState } = useContext(SliderContext);

  function selectHandler(event: ChangeEvent<HTMLSelectElement>) {
    switch (event.target.name) {
      case "Control layout":
        setSliderState((prevState) => {
          let newControls: { left: string; right: string } = {
            left: "button-left-position2",
            right: "button-right-position2",
          };
          if (event.target.value === "Mid line") {
            newControls = {
              left: "button-left-position1",
              right: "button-right-position1",
            };
          } else if (event.target.value === "Lower line") {
            newControls = {
              left: "button-left-position2",
              right: "button-right-position2",
            };
          }
          return { ...prevState, controlsVariant: newControls };
        });
        break;
      case "Image collection":
        if (event.target.value === "Birds") {
          fetch(
            "https://responsive-slider-default-rtdb.europe-west1.firebasedatabase.app/birds-collection.json"
          )
            .then((res) => res.json())
            .then((data) => {
              setSliderState((prevState) => {
                return { ...prevState, imageCollection: data };
              });
            });
        } else if (event.target.value === "Flowers") {
          fetch(
            "https://responsive-slider-default-rtdb.europe-west1.firebasedatabase.app/flowers-collection.json"
          )
            .then((res) => res.json())
            .then((data) => {
              setSliderState((prevState) => {
                return { ...prevState, imageCollection: data };
              });
            });
        } else if (event.target.value === "Mix") {
          fetch(
            "https://responsive-slider-default-rtdb.europe-west1.firebasedatabase.app/mix-collection.json"
          )
            .then((res) => res.json())
            .then((data) => {
              setSliderState((prevState) => {
                return { ...prevState, imageCollection: data };
              });
            });
        }

        break;
    }
  }

  return (
    <div className={classes["option-wrapper"]}>
      <label htmlFor={props.variant}>{props.variant}</label>
      <select
        name={props.variant}
        className={classes["option-menu"]}
        onChange={selectHandler}
      >
        {props.options.map((option) => (
          <option key={props.variant + "-" + option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
