const Title = (props) => {
    return (
        <h1 style={{color: props.color, 
            backgroundColor: props.backgroundColor, 
            fontWeight: props.fontWeight, 
            fontSize: props.fontSize, 
            marginTop: props.marginTop
        }}>
            {props.text}</h1>
    )
}

export default Title;