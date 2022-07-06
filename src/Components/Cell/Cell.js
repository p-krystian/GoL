import './Cell.css'

function Cell(props){
  const { alive, click} = props
  return(
    <div
      className={ `cell ${alive ? 'alive' : 'dead'}` }
      onClick={ click }
    >
    </div>
  )
}
export default Cell
