
import Image from './Image';

import Animate from '../../layout/Animate';

import classes from './SlideLeft.module.css';

type TProps = {
    className: string;
    image: string;
    description: string;
}

export default function SlideLeft ({image, description, className} : TProps) : JSX.Element {
    return <Animate className={classes['slide-left'] + " " + className} variant='SLIDE' dependency={image}>
        <Image image={image} alt={description}/>
    </Animate>
}