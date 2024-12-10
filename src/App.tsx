import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";

interface ListaAnimaisProps { animais: Array<AnimaisTuplaType> }

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
    <div className="app">
      {EXIBICOES.map((exibicao) => (
        <Exibicao
        abertura={new Date(exibicao[1])}
        fechamento={new Date(exibicao[2])}
          cercado={exibicao[0]}
          >
          <ListaAnimais animais={exibicao[3]}></ListaAnimais>
        </Exibicao>))}

    </div>
  )
}

function ListaAnimais({ animais }: ListaAnimaisProps) {
  return (
    <>
      {animais.map((animal) => (
        <Animal
          key={animal[1]}
          icone={animal[0]}
          nome={animal[1]}
          peso={animal[2]}
          extincao={animal[3]}
        />
      ))}
    </>
  );
}

export default App
