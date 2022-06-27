import styles from './Header.module.css'

function Header(props){
  const { vertical, click } = props
  return (
    <div
      className={ `${styles.header} ${click ? styles.active : ''}` }
      onClick={ click }
    >{
      vertical ? (<>
        <span>Game</span>
        <span>of</span>
        <span>Life</span>
      </>) : (
        'Game of Life'
      )
    }</div>
  )
}
export default Header
