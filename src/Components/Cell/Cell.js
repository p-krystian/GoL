import PropTypes from 'prop-types'
import './Cell.scss'

function Cell(props){
  const { alive, click, size, margin } = props
  return(
    <button
      style={ {"--size": `${size}px`, "--margin": `${margin}px`} }
      className={ `cell ${alive ? 'alive' : 'dead'}` }
      onClick={ click }
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
  size: PropTypes.number
}

export default Cell
