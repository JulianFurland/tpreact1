const Paragraph = (props) => {
    return (
        <p style={{color: props.color, 
            backgroundColor: props.backgroundColor, 
            fontWeight: props.fontWeight, 
            fontSize: props.fontSize, 
            marginTop: props.marginTop
        }}>
            {props.text}</p>
    )
}

export default Paragraph;