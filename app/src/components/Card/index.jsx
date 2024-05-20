import Paragraph from "../Paragraph";
import Title from "../Title";
import Img from "../Img";

const Card = (props) => {
    return (
        <div style={{border: '1px solid #00000020', borderRadius: '0.5rem', width: props.width, height: props.height}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#00000020', borderRadius: '0.5rem 0.5rem 0 0'}}>
            <Title text={props.title} color={props.titleColor} fontWeight= '600' fontSize= '20px' marginLeft='10%'/>
            <Img src={props.srcImg} width='50px' height='50px' marginRight='10%'/>
            </div>
            <div style={{marginLeft:"10%", width:'80%'}}>
                <Paragraph text={props.paragraph} textAlign='justify'/>
            </div>
        </div>
    )
}

export default Card;