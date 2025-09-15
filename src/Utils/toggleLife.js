function toggleLife(toUpdate, table){
  const newTable = [...table]
  for (const cell of toUpdate)
    newTable[cell.y][cell.x] = +!newTable[cell.y][cell.x]
  return newTable
}
export default toggleLife
