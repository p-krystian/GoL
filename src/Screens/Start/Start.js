import styles from './Start.module.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'

function Start(){
  return (
    <div className={ styles.start }>
      <Header vertical={ true } />
      <div className={ styles.buttons }>
        <Button>START</Button>
        <Button>ABOUT</Button>
        <Button>EXIT</Button>
      </div>
    </div>
  )
}
export default Start
