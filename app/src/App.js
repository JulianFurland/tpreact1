
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
//#endregion

function App() {
  let click;
  return (
    <div className="App">
      <Img src={imgPersona} width='10%' height='10%'/>
      <div style={{backgroundColor: 'white', borderRadius: '0.5rem', width: '200px', height: '50px', display: 'flex'}}>
        <Img src={imggithub} width='100%' height='100|%'/>
        <Img src={imginstagram} width='100%' height='100%'/>
        <Img src={imglinkedin} width='100%' height='100%'/>
      </div>
      <Card width='300px' title="Esto es una Card" titleColor='white' srcImg={imgCloud}/>
      <Button text='Hola chino'/>
    </div>
  );
}

export default App;
