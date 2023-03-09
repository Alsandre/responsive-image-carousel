import { ChangeEvent, ReactEventHandler, useContext, useState, MouseEvent } from 'react';

import { SliderContext } from '../context/slider-context';

import Option from '../components/options/Option';

import classes from './OptionLayout.module.css';

export default function OptionLayout () : JSX.Element {
    const {sliderState, setSliderState} = useContext(SliderContext);

    console.log(sliderState);

    const modeSelectHandler = (event : ChangeEvent<HTMLSelectElement>) => {
        switch(event.target.value) {
            case 'Baseline controls':
                setSliderState(prevState => {
                    return {...prevState, controls: event.target.value}
                })
        }
        console.log(event.currentTarget);
    };
    
    return <div className={classes.menu}>
        <Option variant='Control layout' options={['Lower line', 'Mid line']}/>
        <Option variant='Slider layout' options={['Horizontal', 'Vertical']}/>
        <Option variant='Image collection' options={['Mix', 'Birds', 'Flowers']}/>
    </div>
}