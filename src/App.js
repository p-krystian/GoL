import './App.css'
import Mark from './Components/Mark/Mark'
import About from './Components/About/About'
import Main from './Screens/Main/Main'
import Start from './Screens/Start/Start'
import { useState } from 'react'

const __developer__ = 'Krystian Piątek'
const __version__ = '1.05 dev'

function App() {
  const [currentScreen, setCurrentScreen] = useState('start')
  return (<>{
    currentScreen === 'main' ? (
      <Main back={ () => setCurrentScreen('start') } />
    ) : (
      <>
        <Start set={ setCurrentScreen } />
        { currentScreen === 'about' ? (
          <About
            ver={ __version__ }
            developer={ __developer__ }
            back={ () => setCurrentScreen('start') }
          />
        ) : (null) }
      </>
    )}
    <Mark>
      by <a href="http://krystian.zalana.eu" target="_blank" rel="noreferrer">
        Krystian Piątek
      </a>
    </Mark>
  </>)
}

export default App;
