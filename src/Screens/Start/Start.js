import styles from './Start.module.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'

function Start(props){
  const { set } = props
  return (
    <div className={ styles.start }>
      <Header vertical={ true } />
      <div className={ styles.buttons }>
        <Button click={ () => set('main') }>Start</Button>
        <Button click={ () => set('about') }>About</Button>
        <Button click={ () => window.history.back() }>Exit</Button>
      </div>
    </div>
  )
}
export default Start
