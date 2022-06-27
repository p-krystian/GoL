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
      Width:
      <input
        type="number"
        value={ current.size.w }
        onChange={ e => updateSize('w', +e.target.value) }
      />
      Height:
      <input
        type="number"
        value={ current.size.h }
        onChange={ e => updateSize('h', +e.target.value) }
      />
      Delay:
      <input
        type="number"
        value={ current.delay }
        onChange={ e => update.delay(+e.target.value) }
      />
    </div>
  )
}
export default Settings
