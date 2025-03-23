import './App.css'
import Mark from './Components/Mark/Mark'
import Main from './Screens/Main/Main'
import Start from './Screens/Start/Start'
import { useState } from 'react'

function App() {
  const [currentScreen, setCurrentScreen] = useState('start')
  return (
    <>
      { currentScreen === 'main' ? (
        <Main back={() => setCurrentScreen('start')} />
      ) : (
        <Start set={setCurrentScreen} />
      ) }
      < Mark />
    </>
  )
}

export default App
