
import classes from './Image.module.css';

type TProps = {
    image: string;
    alt: string;
    className?: string;
}

export default function Image (props : TProps) : JSX.Element {
    return <img src={props.image} alt={props.alt} className={classes['image-styles']}></img>
}