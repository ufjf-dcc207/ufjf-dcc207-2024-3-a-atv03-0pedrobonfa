import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";
import EXIBICOES, { AnimaisTuplaType } from "./exibicoes";

interface ListaAnimaisProps { animais: Array<AnimaisTuplaType> }

function App() {

  return (
    <div className="app">
      {EXIBICOES.map((exibicao) => (
        <Exibicao
          key={exibicao[0]}
          abertura={new Date(exibicao[1])}
          fechamento={new Date(exibicao[2])}
          cercado={exibicao[0]}
        >
          <ListaAnimais animais={exibicao[3]}></ListaAnimais>
        </Exibicao>
      ))}
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
