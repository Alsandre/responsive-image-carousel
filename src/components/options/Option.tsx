import classes from "./Option.module.css";

type OptionType = {
  variant: string;
  options: string[];
};

export default function Option(props: OptionType): JSX.Element {
  
  return (
    <div className={classes['option-wrapper']}>
      <label htmlFor={props.variant}>{props.variant}</label>
      <select name={props.variant} className={classes["option-menu"]}>
        {props.options.map((option) => (
          <option key={props.variant + "-" + option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
