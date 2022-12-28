import PropTypes from 'prop-types'
import styles from './About.module.css'
import { useRef, useEffect } from 'react'

function About(props){
  const { ver, developer, back } = props
  const wrapper = useRef(null)

  // eslint-disable-next-line
  function keyExit(keyup){
    if (['Escape', 'Backspace'].includes(keyup.key))
      back()
  }

  useEffect(() => {
    document.body.addEventListener('keyup', keyExit)
    return () => document.body.removeEventListener('keyup', keyExit)
  }, [keyExit])

  return (
    <div
      className={ styles.wrapper }
      ref={ wrapper }
      onClick={ e => {
        if (e.target === wrapper.current)
          back()
      }}
    >
        <div className={ styles.window }>
        <center><p>Game of Life</p></center>
        <br />
        <p>It is an implement of cellular</p>
        <p>automaton by John H Conway.</p>
        <p>Select live cells and click</p>
        <p>START to start life simulation.</p>
        <br />
        <center><p>v{ ver } - by { developer }</p></center>
      </div>
    </div>
  )
}
About.propTypes = {
  ver: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired
}

export default About
