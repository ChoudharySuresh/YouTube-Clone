import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-slate-200 px-4 py-2 mx-2 rounded-md'>{name}</button>
    </div>
  )
}

export default Button
