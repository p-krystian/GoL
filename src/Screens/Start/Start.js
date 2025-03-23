import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './Start.module.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import About from '../../Components/About/About'

function Start({ set }){
  const exit = () => (window.history.back() || window.close())
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className={ styles.start }>
      <Header vertical={ true } />
      <div className={ styles.buttons }>
        <Button click={ () => set('main') }>Start</Button>
        <Button click={ () => setShowAbout(true) }>About</Button>
        <Button click={ () => exit() }>Exit</Button>
      </div>
      { !!showAbout && <About back={ () => setShowAbout(false) } /> }
    </div>
  )
}
Start.propTypes = {
  set: PropTypes.func
}

export default Start
