import './Board.css'

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

export default Board
