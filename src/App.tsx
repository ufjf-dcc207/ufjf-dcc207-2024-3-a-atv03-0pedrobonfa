import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";
function App() {

  return ( 
    <div className='app'>
      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} 
      fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
      cercado='A1'
      >
      <Animal icone='🦁' nome='Leão' peso={190.37} extincao={true}/>
      <Animal icone='🦒' nome='Girafa' peso={1200} extincao={true}/>
      </Exibicao>

      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
      cercado='B1'
      >
      <Animal icone='🦓' nome='Zebra' peso={200} extincao={true}/>
      <Animal icone='🦜' nome='Papagaio' peso={0.12}/>

      </Exibicao>
    </div>
    
  )
}

export default App
