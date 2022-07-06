import aliveNeighbors from '../aliveNeighbors/aliveNeighbors'

function cycle(table, stop){
  const toUpdate = []
  let aliveInCycle = 0
  for (const y in table)
    for (const x in table[+y]){
      const cell = table[+y][+x]
      const aN = aliveNeighbors(table, +y, +x)

      if (!cell && aN === 3)
        toUpdate.push({y, x})
      else if (cell && (aN < 2 || aN > 3))
        toUpdate.push({y, x})

      cell && aliveInCycle++
    }
  stop && aliveInCycle === 0 && stop()
  return toUpdate
}

export default cycle
