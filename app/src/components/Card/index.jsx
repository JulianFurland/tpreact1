import Paragraph from "../Paragraph";
import Title from "../Title";
import Img from "../Img";

const Card = (props) => {
    return (
        <div style={{border: '1px solid #00000020', borderRadius: '0.5rem', width: props.width, height: props.height}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#00000020', borderRadius: '0.5rem 0.5rem 0 0'}}>
            <Title text={props.title} color={props.titleColor} fontWeight= '600' fontSize= '20px' />
            <Img src={props.srcImg} width='50px' height='50px'/>
            </div>
            <div>
                <Paragraph text={props.paragraph}/>
            </div>
        </div>
    )
}

export default Card;