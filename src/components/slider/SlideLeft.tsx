
import Image from './Image';

import classes from './SlideLeft.module.css';

type TProps = {
    className: string;
    image: string;
    description: string;
}

export default function SlideLeft (props : TProps) : JSX.Element {
    return <div className={classes['slide-left'] + " " + props.className}>
        <Image image={props.image} alt={props.description}/>
    </div>
}