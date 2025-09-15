const aliveNeighbors = (table, y, x) => [
  table[y-1]?.at(x-1),
  table[y-1]?.at(x),
  table[y-1]?.at(x+1),
  table[y][x-1],
  table[y][x+1],
  table[y+1]?.at(x-1),
  table[y+1]?.at(x),
  table[y+1]?.at(x+1)
].filter(aliveNeighbor => aliveNeighbor).length

export default aliveNeighbors
