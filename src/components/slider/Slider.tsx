import { useState } from 'react';

import SlideLeft from './SlideLeft';
import ActiveSlide from './ActiveSlide';
import SlideRight from './SlideRight';

import classes from './Slider.module.css';
import SliderButton from '../controls/SliderButton';

import { IMAGE_LIST } from '../../constants';


export default function Slider () : JSX.Element {
    
    const [state, setState] = useState<number>(1);
    const rightClickHandler = () : void => {
        if(state === IMAGE_LIST.length-2){
            setState(1);
        }else {
            setState(state+1);
        }
    };
    const leftClickHandler = () : void => {
        if(state === 1){
            setState(IMAGE_LIST.length-2);
        }else {
            setState(state-1);
        }
    };

    return <div className={classes['slider-parent']}>
        <SlideLeft description='' image={IMAGE_LIST[state-1].imageURL} className={classes['left-child']} />
        <ActiveSlide description='' image={IMAGE_LIST[state].imageURL} className={classes['active-child']} />
        <SlideRight description='' image={IMAGE_LIST[state+1].imageURL} className={classes['right-child']} />
        <SliderButton direction='<' className={classes['button-left-position2']} onClick={leftClickHandler} />
        <SliderButton direction='>' className={classes['button-right-position2']} onClick={rightClickHandler} />
    </div>
};