import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";

type ExibicaoTuplaType = [string, string, string, AnimaisTuplaType[]];
type AnimaisTuplaType = [string, string, number, boolean];
const EXIBICOES:ExibicaoTuplaType[] = [
  ["A1", "2024-12-06T08:00:00.000-03:00", "2024-12-06T16:00:00.000-03:00",[
    
    ["🦁", "Leão", 190.37, true],
    ["🦒", "Girafa", 190.37, true],

  ]],
  ["B2", "2024-12-06T08:00:00.000-03:00", "2024-12-06T16:00:00.000-03:00",[

    ["🦜", "Papagaio", 0.12, false],
    ["🦓", "Zebra", 200, true]

  ]]
];

function App() {

  return (
    <div className='app'>
        {EXIBICOES.map((exibicao) =>( 

          <Exibicao
            key={exibicao[0]}
            abertura={new Date=(exibicao[1])}
            fechamento={new Date=(exibicao[1])}
            cercado={exibicao[0]}
          >
          {exibicao[3].map((animal)=>( 

            <Animal
            key={exibicao[0]}
            abertura={new Date=(exibicao[1])}
            fechamento={new Date=(exibicao[1])}
            cercado={exibicao[0]}
            /> 
          )
          

      </div>

  )
}

export default App
