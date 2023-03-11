import { ReactNode, useState, useEffect } from "react";

import classes from './Animate.module.css';

type AnimatePropsType = {
    children: ReactNode;
    variant?: string;
    dependency?: string;
    className?: string;
}

export default function Animate ({children, variant, dependency, className} : AnimatePropsType) :JSX.Element   {
    const [animationState, setAnimationState] = useState('');

  useEffect(() => {
    switch(variant) {
        case 'WRAPPER':
            setAnimationState(classes.wrapper);
            break;
        case 'SLIDE':
            setAnimationState(classes.slide);
            break;
        default:
            setAnimationState('')
    }
  
    const slideAnimateCleaner = setTimeout(() => {
      setAnimationState('')
    }, 500);
    return () => {
      clearTimeout(slideAnimateCleaner);
    }
  }, [dependency])
    return <div className={`${className} ${animationState}`}>{children}</div>
} 