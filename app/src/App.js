
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
import imgCardPP from './imgs/cardPP.png';
import imgCardUX from './imgs/cardUX.png';
import imgCardEngranaje from './imgs/cardEngranaje.png';
import imgCardLibro from './imgs/cardLibro.png';
import imgMaxi from './imgs/maxi.jpg';
//#endregion

function App() {
  let click;
  let textPP = "Para mi proyecto final, junto a mis compañeros desarrollamos una aplicacion social/educativa. En el proceso de este proyecto, me especialice en diseño mobile aunque tambien trabaje mucho en el backEnd.";
  let textOrt = "En mi tercer año de secundario elegi la orientacion de informatica, en la cual tuve muchas materias relacionadas con la tecnologia, entre ellas: Programacion, diseño web, arte digital, Estructura y funcionamiento de los sistemas, Tecnologias exponenciales, etc,";
  let textOATEC = "Durante tres meses, me embarqué en una competencia individual centrada en la implementación de tecnologías actuales en el sector agrícola. Este desafío me llevó a explorar soluciones innovadoras para una problematica desconocida hasta el momento de competir. A lo largo del proceso, enfrenté obstáculos que exigían creatividad y habilidades técnicas para encontrar soluciones efectivas. Fue una experiencia desafiante pero gratificante, que me permitió crecer profesionalmente.";
  let textUMAI = "Durante una semana, participé en una competencia enfocada en la interfaz de usuario y el trabajo en equipo. Junto con mi equipo, enfrentamos desafíos que exigieron habilidades de resolución de problemas y colaboración. Fue una experiencia intensa pero gratificante, que nos permitió demostrar nuestra capacidad para trabajar bajo presión y alcanzar resultados significativos en un corto período de tiempo.";
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
      
      <div style={{display: 'flex', marginLeft: '10%', marginTop:'5rem'}}>
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
                window.open('https://github.com/Maxisher8', '_blank')
              }
            }
            <Img src={imggithub} width='50px' click={click} className='imgLink'/>
            {
              click = () =>{
                window.open('https://www.instagram.com/maxisherr', '_blank')
              }
            }
            <Img src={imginstagram} width='50px' click={click} className='imgLink'/>
            {
              click = () =>{
                window.open('https://ar.linkedin.com/in/maxi-sher-78321328a', '_blank')
              }
            }
            <Img src={imglinkedin} width='50px' click={click} className='imgLink'/>
            
          </div>
          <a href='#Contacto'>
            <Button
              className='btnContacto'
              text='Contacto' 
              borderRadius='1rem'
              marginTop='20px'
              width='170px' 
              height='40px' 
              backgroundImage='linear-gradient(#03b79c,#99fdac)' 
              border='0px' 
              fontWeight='900' 
              fontFamily='Nunito Sans'
              fontSize='16px'
            />
          </a>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'Left', width: '20%', marginLeft: '24%'}}>
          <Title text='Hola! Me llamo Maxi Sher.' fontWeight='Bold'/>
          <Paragraph text='Estoy estudiando informatica en la escuela ORT Me voy a egresar el 2024 y estoy en busca de mi primera experiencia laboral'
            marginTop='-6px' fontSize='20px'/>
          <Paragraph text=' Mi experiencia en la metodología de trabajo escolar me permiten comunicar mis pensamientos e intenciones de una manera clara y eficiente. Además, cuento con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.'
            marginTop='-6px' fontSize='20px'/>
        </div>
        <Img src={imgMaxi} borderRadius='100%' width='20%' height='20%' marginLeft='10rem' marginTop='3rem'/>
      </div>
      
      <div>
        <Title text='Conocimientos' fontWeight='bold'/>
        <div style={{display:'flex', justifyContent:'center', marginLeft:'-2rem'}}>
            <ul style={{listStyle:'none', width:'70%', display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <li>
                <Img src={imgComputer} width='30%'/>
                <Paragraph text='Maquetado Web' fontWeight='500'/>
              </li>
              <li>
                <Img src={imgCloud} width='30%'/>
                <Paragraph text='Manejo de Cloud' fontWeight='500'/>
              </li>
              <li>
                <Img src={imgDesign} width='30%'/>
                <Paragraph text='Diseño UX/UI' fontWeight='500'/>
              </li>
              <li>
                <Img src={imgReact} width='30%'/>
                <Paragraph text='Desarrollo React' fontWeight='500'/>
              </li>
            </ul>
        </div>
      </div>
      <Title text='Experiencia' fontWeight='bold'/>
      <div style={{width:'55%', alignSelf:'center'}}>
        <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'space-around'}}>
          <Card width='28rem' title="UMAI UX Challenge" titleColor='white' srcImg={imgCardUX}
          paragraph={textUMAI}/>
          <Card width='28rem' title="OATEC" titleColor='white' srcImg={imgCardEngranaje}
          paragraph={textOATEC}/>
        </div>
        <br/>
        <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'space-around' }}>
          <Card width='28rem' title="Secundario ORT" titleColor='white' srcImg={imgCardLibro}
          paragraph={textOrt}/>
          <Card width='28rem' title="Proyecto de Producción" titleColor='white' srcImg={imgCardPP}
          paragraph={textPP}/>
        </div>
      </div>
      <Title text='Contacto' fontWeight='bold'/>

      <div style={{alignSelf:'center', display:'flex', width:'50%', flexDirection:'row'}}>
        <form style={{padding:'1rem', width:'70%', backgroundColor:'#00000020', borderRadius:'0.5rem', display:'flex', flexDirection:'column'}}>
            <Paragraph text='Nombre' textAlign='left'/>
            <input type='text' style={{border:'1px #00000040 solid', borderRadius:'0.3rem', fontSize:'18px', fontFamily:'Segoe UI'}}></input>
            <Paragraph text='Email' textAlign='left'/>
            <input type='text' style={{border:'1px #00000040 solid', borderRadius:'0.3rem', fontSize:'18px', fontFamily:'Segoe UI'}}></input>
            <Paragraph text='Mensaje' textAlign='left'/>
            <textarea style={{resize:'none', border:'1px #00000040 solid', borderRadius:'0.3rem', paddingBottom:'3rem', fontSize:'20px', fontFamily:'Segoe UI'}}></textarea>

        </form>
        <div style={{marginLeft:'2rem', textAlign:'left'}}>
          <Title text='Sigamos en contacto!' fontSize='22px'/>
            <Paragraph text="Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal"/>
            <Paragraph text="¡Gracias por visitar mi sitio web!"/>
            <div style={{display:'flex', justifyContent:'space-between', width:'50%'}}>
              <Paragraph text="Email: "/>
              <Paragraph text="maxisher@gmail.com" fontWeight='bold'/>
            </div>
        </div>
      </div>
      <footer style={{marginTop:'3rem', width:'100%', backgroundColor:'#00000020'}}>
        <Paragraph text='Maximiliano Sher' marginTop='3rem' fontSize='24px' fontWeight='bold'/>
        <Paragraph text='Estudiante de Informática en Secundario ORT'/>
        <Paragraph text='©2024 Maximiliano Sher. Todos los derechos reservados' color='#00000090' fontSize='12px'/>
      </footer>
    </div>
  );
}

export default App;
