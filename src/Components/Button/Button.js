import styles from './Button.module.css'

function Button(props){
  const { children, click } = props
  return (
    <button className={ styles.btn } onClick={ click }>
      { children }
    </button>
  )
}

export default Button
