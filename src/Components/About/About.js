import PropTypes from 'prop-types'
import styles from './About.module.scss'
import { useRef, useEffect } from 'react'
import packageJSON from '../../../package.json'

function About({ back }){
  const wrapper = useRef(null)

  useEffect(() => {
    const keyExit = keyup => (
      ['Escape', 'Backspace'].includes(keyup.key) ? back() : null
    )

    document.body.addEventListener('keyup', keyExit)
    return () => document.body.removeEventListener('keyup', keyExit)
  }, [back])

  return (
    <div
      className={ styles.wrapper }
      ref={ wrapper }
      onClick={ e => e.target === wrapper.current ? back() : null }
    >
      <div className={ styles.window }>
        <center><p>Game of Life</p></center>
        <br />
        <p>It is an implement of cellular</p>
        <p>automaton by John H Conway.</p>
        <p>Select live cells and click</p>
        <p>START to start life simulation.</p>
        <br />
        <center>
          <p>v{ packageJSON.version } - by { packageJSON.author }</p>
        </center>
      </div>
    </div>
  )
}
About.propTypes = {
  back: PropTypes.func.isRequired
}

export default About
