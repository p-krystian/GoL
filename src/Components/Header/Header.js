import PropTypes from 'prop-types'
import styles from './Header.module.css'
import {useRef, useEffect} from 'react'

function Header(props){
  const { vertical, click } = props
  const header = useRef(null)

  // eslint-disable-next-line
  function keyClick(keyup){
    if (['Enter', 'Space', ' '].includes(keyup.key))
      click && click()
  }

  useEffect(() => {
    header.current.addEventListener('keyup', keyClick)
  }, [keyClick, header])


  return (
    <div
      className={ `${styles.header} ${click ? styles.active : ''}` }
      onClick={ click }
      tabIndex={ click ? 0 : -1 }
      ref={ header }
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
Header.propTypes = {
  vertical: PropTypes.bool,
  click: PropTypes.func
}

export default Header
