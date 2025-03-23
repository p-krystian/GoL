import PropTypes from 'prop-types'
import styles from './Settings.module.scss'

function Settings(props){
  const {current, update} = props

  function updateSize(axis, value){
    if (axis === 'w')
      update.size({
        w: value,
        h: current.size.h,
        s: current.size.s
      })
    else if (axis === 'h')
      update.size({
        w: current.size.w,
        h: value,
        s: current.size.s
      })
    else
      update.size({
        w: current.size.w,
        h: current.size.h,
        s: value
      })
  }

  return (
    <div className={ styles.settings }>
        <span>Size:</span>
        <input
          type="number"
          min="4"
          step="2"
          value={ current.size.s }
          onChange={ e => updateSize('s', +e.target.value) }
        />
        <span>px</span>

        <span>Width:</span>
        <input
          type="number"
          min="1"
          step="1"
          value={ current.size.w }
          onChange={ e => updateSize('w', +e.target.value) }
        />
        <span>cells</span>

        <span>Height:</span>
        <input
          type="number"
          min="1"
          step="1"
          value={ current.size.h }
          onChange={ e => updateSize('h', +e.target.value) }
        />
        <span>cells</span>

        <span>Delay:</span>
        <input
          type="number"
          min="100"
          step="50"
          value={ current.delay }
          onChange={ e => update.delay(+e.target.value) }
        />
        <span>ms</span>

    </div>
  )
}
Settings.propTypes = {
  current: PropTypes.object.isRequired,
  update: PropTypes.objectOf(PropTypes.func).isRequired
}

export default Settings
