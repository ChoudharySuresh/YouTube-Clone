import React from 'react'
import { RxAvatar } from "react-icons/rx";


const LiveMessage = ({name , message}) => {
  return (
    <>
      <div className='flex items-center justify-between px-1 py-1 my-1'>
         <RxAvatar className='text-2xl'/>
         <h1 className='text-sm mx-2'>{name}</h1>
         <p className='text-sm'>{message}</p>
      </div>
    </>
  )
}

export default LiveMessage
