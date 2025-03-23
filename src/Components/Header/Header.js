import PropTypes from 'prop-types'
import styles from './Header.module.css'
import {useRef, useEffect} from 'react'

function Header(props){
  const { vertical, click } = props
  const headerRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const keyClick = keyup => (
      ['Enter', 'Space', ' '].includes(keyup.key) ? click() : null
    )

    header.addEventListener('keyup', keyClick)
    return () => header.removeEventListener('keyup', keyClick)
  }, [headerRef, click])

  return (
    <div
      className={ `${styles.header} ${click ? styles.active : ''}` }
      onClick={ click }
      tabIndex={ click ? 0 : -1 }
      ref={ headerRef }
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
