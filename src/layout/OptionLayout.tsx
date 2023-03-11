
import Option from '../components/options/Option';

import classes from './OptionLayout.module.css';

export default function OptionLayout () : JSX.Element {

    
    return <div className={classes.menu}>
        <Option variant='Control layout' options={['Lower line', 'Mid line']}/>
        <Option variant='Slider layout' options={['Horizontal', 'Vertical']}/>
        <Option variant='Image collection' options={['Mix', 'Birds', 'Flowers']}/>
    </div>
}