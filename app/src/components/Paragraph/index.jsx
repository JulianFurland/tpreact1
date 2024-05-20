const Paragraph = (props) => {
    return (
        <p style={{
            width: props.width,
            color: props.color, 
            backgroundColor: props.backgroundColor, 
            fontWeight: props.fontWeight, 
            fontSize: props.fontSize, 
            marginTop: props.marginTop,
            textAlign: props.textAlign
        }}>
            {props.text}</p>
    )
}

export default Paragraph;