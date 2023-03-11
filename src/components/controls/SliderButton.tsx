type TProps = {
    className: string,
    onClick: () => void,
    direction: string
}

export default function SliderButton (props : TProps) : JSX.Element {
    return <button className={props.className} onClick={props.onClick}>{props.direction}</button>
}