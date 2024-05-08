const Button = (props) => {
    return (
        <button onClick={props.onclick} style={{backgroundColor: props.backgroundColor, color:props.color, borderRadius: props.borderRadius, width: props.width, height: props.height, fontSize: props.fontSize, fontWeight: props.fontWeight}}>{props.text}</button>
    )
}

export default Button;