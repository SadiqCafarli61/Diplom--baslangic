import React from 'react'

const Button = (props) => {
  return (
   <div>
<button className='btn-color'>{props.writeIn} {props.name}</button>
   </div>
  )
}

export default Button