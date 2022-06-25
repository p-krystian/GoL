import aliveNeighbors from '../aliveNeighbors/aliveNeighbors'

function cycle(table){
  const toUpdate = []
  for (const y in table)
    for (const x in table[+y]){
      const cell = table[+y][+x]
      const aN = aliveNeighbors(table, +y, +x)

      if (!cell && aN == 3)
        toUpdate.push({y, x})
      else if (cell && (aN < 2 || aN > 3))
        toUpdate.push({y, x})
    }
  return toUpdate
}

export default cycle
