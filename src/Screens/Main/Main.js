import PropTypes from 'prop-types'
import styles from './Main.module.css'
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

function Main({ back }){
  const [size, setSize] = useState(defaultSize)
  const [delay, setDelay] = useState(defaultDelay)
  const [table, setTable] = useState( [[]] )
  const [running, setRunning]  = useState(false)
  const [settings, setSettings] = useState(false)

  const board = useRef(null);
  const filledBoard = () => ({
    w: Math.round(board.current.offsetWidth / (size.s+2)) - 1,
    h: Math.round(board.current.offsetHeight / (size.s+2)) - 1,
    s: size.s
  })
  function clearSettings(){
    setSize(defaultSize)
    setDelay(defaultDelay)
  }

  useEffect(() => {
    if (!running){
      runningCycle = clearInterval(runningCycle)
      return
    }
    runningCycle = setInterval(() => (
      setTable(
        toggleLife(
          cycle(table, () => setRunning(false)),
          table
        )
      )
    ), delay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

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
                  click={ () => setTable(toggleLife([{y, x}], table)) }
                  size={ size.s }
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
            <Button click={ () => setRunning(false) }>stop</Button>
          ) : (<>
            <Button click={ () => setTable(cleanTable(size)) }>clear</Button>
            <Button click={ () => setRunning(true) }>start</Button>
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
