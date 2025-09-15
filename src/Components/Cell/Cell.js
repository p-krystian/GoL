import PropTypes from 'prop-types'
import './Cell.scss'
import { memo } from 'react'

function Cell(props){
  const { alive, click, size, margin } = props
  return(
    <button
      style={ {"--size": `${size}px`, "--margin": `${margin}px`} }
      className={ `cell ${alive ? 'alive' : 'dead'}` }
      onClick={ click }
      aria-label={ `Cell ${alive ? 'alive' : 'dead'}` }
      aria-pressed={ alive }
    >
    </button>
  )
}
Cell.propTypes = {
  alive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  click: PropTypes.func,
  size: PropTypes.number,
  margin: PropTypes.number
}

export default memo(Cell)
