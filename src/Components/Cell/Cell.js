
// function toggleLife(cell){
//   cell.classList.toggle('dead')
//   cell.classList.toggle('alive')
// }

function Cell(props){
  const { alive, click} = props
  return(
    <div
      // id={ `c${y}-${x}` }
      className={ `cell ${alive ? 'alive' : 'dead'}` }
      // onClick={ e => toggleLife(e.target) }
      onClick={ click }
    ></div>
  )
}
export default Cell
