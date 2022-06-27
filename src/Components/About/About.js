import styles from './About.module.css'
import { useRef } from 'react'

function About(props){
  const { ver, developer, back } = props
  const wrapper = useRef(null)

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
        <p>automation by Horton Conway.</p>
        <p>Select live cells and click</p>
        <p>START to start life simulation.</p>
        <br />
        <center><p>v{ ver } - by { developer }</p></center>
      </div>
    </div>
  )
}
export default About
