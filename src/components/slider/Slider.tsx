import { useContext, useState } from 'react';

import { SliderContext } from '../../context/slider-context';

import SlideLeft from './SlideLeft';
import ActiveSlide from './ActiveSlide';
import SlideRight from './SlideRight';

import SliderButton from '../controls/SliderButton';

import classes from './Slider.module.css';
import { IMAGE_LIST } from '../../constants';


export default function Slider () : JSX.Element {
    const {sliderState} = useContext(SliderContext);

    // let leftButtonClass: string = 'button-left-position2';
    // let  rightButtonClass: string = 'button-right-position2';

    // if(sliderState.controlsVariant === 'Lower lane') {
    //     leftButtonClass = 'button-left-position2';
    //     rightButtonClass = 'button-right-position2';
    // }else if(sliderState.controlsVariant === 'Mid lane'){
    //     leftButtonClass = 'button-left-position1';
    //     rightButtonClass = 'button-right-position1';
    // }
    
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
        <SliderButton direction='<' className={classes[sliderState.controlsVariant.left]} onClick={leftClickHandler} />
        <SliderButton direction='>' className={classes[sliderState.controlsVariant.right]} onClick={rightClickHandler} />
    </div>
};