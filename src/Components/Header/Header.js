import styles from './Header.module.css'

function Header(props){
  const { vertical } = props
  return (
    <div className={ styles.header }>{
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
