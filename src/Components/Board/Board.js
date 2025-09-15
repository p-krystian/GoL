import './Board.scss'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const Board = forwardRef((props, ref) => {
  const { children, running } = props
  return (
    <div
      className={ `board ${running ? 'running' : ''}` }
      ref={ ref }
    >
      { children }
    </div>
  )
})

Board.displayName = 'Board'

Board.propTypes = {
  children: PropTypes.element,
  running: PropTypes.bool,
}

export default Board
