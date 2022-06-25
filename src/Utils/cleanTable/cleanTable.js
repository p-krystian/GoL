function cleanTable(size){
  const tab = [];
  for (let i = 0; i < size.h; i++)
    tab.push(new Array(size.w).fill(0))
  return tab
}
export default cleanTable
