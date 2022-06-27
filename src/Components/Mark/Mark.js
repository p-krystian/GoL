import styles from './Mark.module.css'

function Mark(props){
  return (
    <div className={ styles.mark }>
      { props.children }
    </div>
  )
}
export default Mark
