import styles from './Settings.module.css'

function Settings(props){
  const {current, update} = props

  function updateSize(axis, value){
    if (axis === 'w')
      update.size({
        w: value,
        h: current.size.h
      })
    else
      update.size({
        w: current.size.w,
        h: value
      })
  }

  return (
    <div className={ styles.settings }>
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
          min="1"
          step="1"
          value={ current.delay }
          onChange={ e => update.delay(+e.target.value) }
        />
        <span>ms</span>

    </div>
  )
}
export default Settings
