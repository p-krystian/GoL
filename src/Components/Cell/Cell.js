import PropTypes from 'prop-types'
import './Cell.css'

function Cell(props){
  const { alive, click } = props
  return(
    <div
      className={ `cell ${alive ? 'alive' : 'dead'}` }
      onClick={ click }
    >
    </div>
  )
}
Cell.propTypes = {
  alive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  click: PropTypes.func
}

export default Cell
