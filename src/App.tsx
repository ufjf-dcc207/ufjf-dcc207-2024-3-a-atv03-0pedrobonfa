import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";
function App() {

  return ( 
    <div className='app'>
      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
      cercado='AI'/>


      <Animal icone='🦁' nome='Leão' peso={190.37} extincao={true}/>
      <Animal icone='🦒' nome='Girafa' peso={1200} extincao={true}/>
      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
      cercado='
      BI' />
      <Animal icone='🦓' nome='Zebra' peso={200}/>
    </div>
    
  )
}

export default App
