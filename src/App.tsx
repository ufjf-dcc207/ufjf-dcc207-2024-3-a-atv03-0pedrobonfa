import './App.css'
import Animal from './Animal'
function App() {

  return (
    <>
      <div className='app'>
        <Animal icone='🦁' nome='Leão' peso={190.37} extincao={true}/>
        <Animal icone='🦒' nome='Girafa' peso={1200} extincao={true}/>
        <Animal icone='🦓' nome='Zebra' peso={200}/>
      </div>
    </>
  )
}

export default App
