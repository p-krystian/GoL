import PropTypes from 'prop-types'
import styles from './Start.module.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'

function Start({ set }){
  const exit = () => (window.history.back() || window.close())
  return (
    <div className={ styles.start }>
      <Header vertical={ true } />
      <div className={ styles.buttons }>
        <Button click={ () => set('main') }>Start</Button>
        <Button click={ () => set('about') }>About</Button>
        <Button click={ () => exit() }>Exit</Button>
      </div>
    </div>
  )
}
Start.propTypes = {
  set: PropTypes.func
}

export default Start
