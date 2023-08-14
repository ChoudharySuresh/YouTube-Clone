import React from 'react'
import { RxAvatar } from "react-icons/rx";

const Comment = ({data}) => {
    const {name , text , replies} = data;
  return (
    <>
      <div className='flex gap-4 mx-2'>
        <RxAvatar className='text-2xl mt-1'/>
        <div>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Comment

