import PropTypes from 'prop-types'
import styles from './Button.module.scss'

function Button(props){
  const { children, click } = props
  return (
    <button className={ styles.btn } onClick={ click }>
      { children }
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.any,
  click: PropTypes.func
}

export default Button
