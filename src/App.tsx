import './App.css'
import Animal from './Animal'
import Exibicao from "./Exibicao";
import { ReactNode } from 'react';
type AnimaisTuplaType = [string, string, number, boolean];

const ANIMAIS:AnimaisTuplaType[] = [
  
  ["🦁", "Leão" ,190.37, true],
  ["🦒", "Girafa", 190.37, true],
  ["🦜", "Papagaio", 0.12, false],
  ["🦓", "Zebra" ,200, true],

];

function App() {
    const exA1:ReactNode[] = [];
    const exB2:ReactNode[] = [];

    for(let i =0; i<ANIMAIS.length; i++){

      //if(ANIMAIS[i][2]<200.00){
      //exA1.push(<Animal
        // icone={ANIMAIS[i][0]}
        // nome={ANIMAIS[i][1]}
        // peso={ANIMAIS[i][2]}
        // extincao={ANIMAIS[i][3]}
        ///>
        // else{
        //   exB2.push(<Animal
            // icone={ANIMAIS[i][0]}
            // nome={ANIMAIS[i][1]}
            // peso={ANIMAIS[i][2]}
            // extincao={ANIMAIS[i][3]}
            // />
        //}

      //);
    //}
      const ex = ANIMAIS[i][2]<200.00?exA1 : exB2;
      ex.push(<Animal 
        icone={ANIMAIS[i][0]}
        nome={ANIMAIS[i][1]}
        peso={ANIMAIS[i][2]}
        extincao={ANIMAIS[i][3]}
      
      />
    );
    }

  return ( 
    <div className='app'>
      <Exibicao 
      abertura={new Date("2024-12-06T08:00:00.000-03:00")} 
      fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
      cercado='A1'
      >{exA1}</Exibicao>

      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} fechamento={new Date("2024-12-06T16:00:00.000-03:00")}
      cercado='B1'
      >{exB2}</Exibicao>
    </div>
    
  )
}

export default App
