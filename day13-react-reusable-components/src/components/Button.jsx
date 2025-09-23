import React from 'react'

function Button({label, clickFunction}) {
  return (
    <button onClick={clickFunction}>{label}</button>
  )
}

export default Button