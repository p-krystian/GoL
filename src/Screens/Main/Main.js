import PropTypes from 'prop-types'
import styles from './Main.module.scss'
import Header from '../../Components/Header/Header'
import Board from '../../Components/Board/Board'
import Cell from '../../Components/Cell/Cell'
import Button from '../../Components/Button/Button'
import Settings from '../../Components/Settings/Settings'
import { useState, useEffect, useRef } from 'react'
import cycle from '../../Utils/cycle/cycle'
import toggleLife from '../../Utils/toggleLife/toggleLife'
import cleanTable from '../../Utils/cleanTable/cleanTable'

const defaultDelay = 500
const defaultSize = {w: 0, h: 0, s: 24}
let runningCycle

const margin = s => (
  Math.max(Math.min(0.06 * s - 0.43), 0.5)
)

function Main({ back }){
  const [size, setSize] = useState(defaultSize)
  const [delay, setDelay] = useState(defaultDelay)
  const [table, setTable] = useState( [[]] )
  const [running, setRunning]  = useState(false)
  const [settings, setSettings] = useState(false)

  const board = useRef(null);
  const filledBoard = () => ({
    w: Math.round(
      board.current.offsetWidth / (margin(size.s) * 2 + size.s)
    ) - 1,
    h: Math.round(
      board.current.offsetHeight / (margin(size.s) * 2 + size.s)
    ) - 1,
    s: size.s
  })

  function clearSettings(){
    setSize(defaultSize)
    setDelay(defaultDelay)
  }

  function cellClick(x, y){
    if (running) return
    setTable(toggleLife([{y, x}], table))
  }

  function startRunning(run){
    setRunning(run)

    if (!run){
      runningCycle = clearInterval(runningCycle)
      return
    }
    runningCycle = setInterval(() => (
      setTable(
        toggleLife(
          cycle(table, () => startRunning(false)),
          table
        )
      )
    ), delay)
  }

  useEffect(() => (
    setTable(cleanTable(size))
  ), [size])

  useEffect(() => {
    const filled = filledBoard()
    defaultSize.w = filled.w
    defaultSize.h = filled.h
    setSize(defaultSize)
    setTable(cleanTable(defaultSize))
    board.current.scrollIntoView(true)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={ styles.main }>
      <Header click={ back }/>
      <Board running={ running } hook={ board }>{
        settings ? (
          <Settings
            current={ {size: size, delay: delay} }
            update={ {size: setSize, delay: setDelay} }
          />
      ) : (<div className={ styles.cellsWraper }>{
          table.map((row, y) => (
            <div className="row" key={ `r${y}` }>{
              row.map((cell, x) => (
                <Cell
                  alive={ cell }
                  click={ () => cellClick(x, y) }
                  size={ size.s }
                  margin={ margin(size.s) }
                  key={ `c${y}-${x}` }
                />
              ))
            }</div>
          ))
        }</div>)
      }</Board>
      <div className={ styles.buttons }>{
        settings ? (<>
          <Button click={ () => setSize(filledBoard()) }>fill</Button>
          <Button click={ () => setSettings(false) }>apply</Button>
          <Button click={ clearSettings }>reset</Button>
        </>) : (
          running ? (
            <Button click={ () => startRunning(false) }>stop</Button>
          ) : (<>
            <Button click={ () => setTable(cleanTable(size)) }>clear</Button>
            <Button click={ () => startRunning(true) }>start</Button>
            <Button click={ () => setSettings(true) }>settings</Button>
          </>)
        )
      }</div>
    </div>
  )
}
Main.propTypes = {
  back: PropTypes.func
}

export default Main
