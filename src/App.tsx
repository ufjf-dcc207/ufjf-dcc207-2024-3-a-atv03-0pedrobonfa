import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";
import { ReactNode } from 'react';
type AnimaisTuplaType = [string, string, number, boolean];

const ANIMAIS: AnimaisTuplaType[] = [

  ["🦁", "Leão", 190.37, true],
  ["🦒", "Girafa", 190.37, true],
  ["🦜", "Papagaio", 0.12, false],
  ["🦓", "Zebra", 200, true],

];

function App() {
  const exA1: AnimaisTuplaType[] = ANIMAIS.filter(animal => animal[2] < 200.00);
  const exB2: AnimaisTuplaType[] = ANIMAIS.filter(animal => animal[2] >= 200.00);


  return (
    <div className='app'>

      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
        cercado='A1'
      >{exA1.map((animal) => {
        return <Animal
          key={animal[1]}
          icone={animal[0]}
          nome={animal[1]}
          peso={animal[2]}
          extincao={animal[3]}

        />
      })}

      </Exibicao>

      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
        cercado='B2'
      >{exB2.map((animal) => {
        return <Animal
          key={animal[1]}
          icone={animal[0]}
          nome={animal[1]}
          peso={animal[2]}
          extincao={animal[3]}

        />
      })}

      </Exibicao>
    </div>

  )
}

export default App
