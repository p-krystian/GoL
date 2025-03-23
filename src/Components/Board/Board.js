import './Board.scss'
import PropTypes from 'prop-types'

function Board(props){
  const { children, running, hook } = props
  return (
    <div
      className={`board ${running ? 'running' : ''}`}
      ref={ hook }
    >
      { children }
    </div>
  )
}
Board.propTypes = {
  children: PropTypes.element,
  running: PropTypes.bool,
  hook: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

export default Board
