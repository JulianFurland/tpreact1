const Img = (props) => {
    return (
        <>
        <img 
        src={props.src} 
        className={props.className}
        alt={props.alt} 
        onClick={props.click} 
        style={{height:props.height, 
            width:props.width, 
            borderRadius:props.borderRadius,
            marginTop:props.marginTop,
            marginRight: props.marginRight,
            marginLeft: props.marginLeft
            }}/>
        </>
        
    )
}
export default Img;