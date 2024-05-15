const Img = (props) => {
    return (
        <>
        <img src={props.src} 
        alt={props.alt} 
        onClick={props.click} 
        style={{height:props.height, 
            width:props.width, 
            borderRadius:props.borderRadius
            }}/>
        </>
        
    )
}
export default Img;