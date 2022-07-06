import PropTypes from 'prop-types'
import styles from './Mark.module.css'

function Mark({ children }){
  return (
    <div className={ styles.mark }>
      { children }
    </div>
  )
}
Mark.propTypes = {
  children: PropTypes.any.isRequired
}

export default Mark
