import styles from './Mark.module.scss'

function Mark(){
  return (
    <div className={ styles.mark }>
      by <a href="http://krystian.zalana.eu" target="_blank" rel="noreferrer">
        Krystian Piątek
      </a>
    </div>
  )
}

export default Mark
