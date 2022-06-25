import Header from '../../Components/Header/Header'
import Board from '../../Components/Board/Board'
import Cell from '../../Components/Cell/Cell'
import Button from '../../Components/Button/Button'
import Settings from '../../Components/Settings/Settings'
import { useState, useEffect } from 'react'
import cycle from '../../Utils/cycle/cycle'
import toggleLife from '../../Utils/toggleLife/toggleLife'
import cleanTable from '../../Utils/cleanTable/cleanTable'

const defaultSize = {w: 25, h: 15}
const defaultDelay = 500
let runningCycle

function Main(){
  const [size, setSize] = useState(defaultSize)
  const [delay, setDelay] = useState(defaultDelay)
  const [table, setTable] = useState(cleanTable(defaultSize))
  const [running, setRunning]  = useState(false)
  const [settings, setSettings] = useState(false)

  function clearSettings(){
    setSize(defaultSize)
    setDelay(defaultDelay)
  }

  useEffect(() => {
    console.log(runningCycle)
    if (running){
      runningCycle = setInterval(() => {
        setTable(toggleLife(cycle(table), table))
      }, delay)
      return
    }
    runningCycle = clearInterval(runningCycle)
  }, [running])
  useEffect(() => (
    setTable(cleanTable(size))
  ), [settings])

  return (
    <div className="main">
      <Header />
      <Board running={ running }>{
        settings ? (
          <Settings
            current={ {size: size, delay: delay} }
            update={ {size: setSize, delay: setDelay} }
          />
        ) : (
          table.map((row, y) => (
            <div className="row" key={ `r${y}` }>{
              row.map((cell, x) => (
                <Cell
                  alive={ cell }
                  click={ () => setTable(toggleLife([{y, x}], table)) }
                  key={ `c${y}-${x}` }
                />
              ))
            }</div>
          ))
        )
      }</Board>
      <div className="buttons">{
        settings ? (<>
          <Button click={ clearSettings }>RESET</Button>
          <Button click={ () => setSettings(false) }>BACK</Button>
        </>) : (
          running ? (
            <Button click={ () => setRunning(false) }>STOP</Button>
          ) : (<>
            <Button click={ () => setTable(cleanTable(size)) }>CLEAR</Button>
            <Button click={ () => setRunning(true) }>START</Button>
            <Button click={ () => setSettings(true) }>SETTINGS</Button>
          </>)
        )
      }</div>
    </div>
  )
}
export default Main
