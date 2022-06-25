function Button(props){
  const { children, click } = props
  return (
    <button onClick={ click }>
      { children }
    </button>
  )
}

export default Button
