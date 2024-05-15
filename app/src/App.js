
import './App.css';
import Button from './components/Button'
import Img from './components/Img';
import Card from './components/Card'


//#region img Imports
import imgReact from './imgs/react.png';
import imgCloud from './imgs/cloud.png';
import imgDesign from './imgs/design.png';
import imgComputer from './imgs/computer.png';
import imgPersona from './imgs/persona.png';
import imginstagram from './imgs/instagram.png';
import imggithub from './imgs/github.png';
import imglinkedin from './imgs/linkedin.png';
import Title from './components/Title';
import Paragraph from './components/Paragraph';
//#endregion

function App() {
  let click;
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', marginLeft: '10%'}}>
       <Title text='Maximiliano Sher'/>
      </div>
      <div style={{display: 'flex', marginLeft: '10%'}}>
        <div>
          <Img src={imgPersona} width='60rem'/>
        </div>

        <div style={{width: '50%' ,display: 'flex', flexDirection: 'column', alignItems: 'baseline'}}>
          <Title text='Buen Dia!' fontWeight='normal'/>
          <Title text='Soy Maxi Sher' fontWeight='bold' fontSize='40px' marginTop='-10px'/>
          <Paragraph text='Estudiante de Informática en Secundario ORT' marginTop='-6px' fontSize='20px'/>
          <div style={{display: 'flex', justifyContent:'space-between' ,height:'50px', width: '30%'}}>
            {
              click = () =>{
                window.open('https://youtube.com', '_blank')
              }
            }
            <Img src={imggithub} width='50px' click={click}/>
            <Img src={imginstagram} width='50px'/>
            <Img src={imglinkedin} width='50px'/>
            
          </div>
          <Button text='Contacto' borderRadius='1rem'
            marginTop='20px'
            width='170px' 
            height='40px' 
            backgroundImage='linear-gradient(#03b79c,#99fdac)' 
            border='0px' 
            fontWeight='900' 
            fontFamily='Nunito Sans'
            fontSize='16px'
          />
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'Left', width: '20%', marginLeft: '24%'}}>
          <Title text='Hola! Me llamo Maxi Sher.' fontWeight='Bold'/>
          <Paragraph text='Estoy estudiando informatica en la escuela ORT Me voy a egresar el 2024 y estoy en busca de mi primera experiencia laboral'
           marginTop='-6px' fontSize='20px'/>
          
          <Paragraph text=' Mi experiencia en la metodología de trabajo escolar me permiten comunicar mis pensamientos e intenciones de una manera clara y eficiente.Además, cuento con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.'
          marginTop='-6px' fontSize='20px'/>
        </div>
      
      
      <Card width='300px' title="Esto es una Card" titleColor='white' srcImg={imgCloud}/>
      {click = () => {
        alert("");
      }}
    </div>
  );
}

export default App;
