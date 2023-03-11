import { ReactNode } from "react";

import classes from './Animate.module.css';

export default function Animate ({children} : {children: ReactNode}) :JSX.Element   {
    return <div className={classes.animation}>{children}</div>
} 