import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import {closeMenu} from "../Utils/appSlice"
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  // console.log(searchParams.get("v"))

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(closeMenu())
  }, [])

  return (
    <>
      <div className='mx-8 my-4 flex flex-col p-0 w-full'>
        <div>
          <iframe width="900" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className='w-[900px]'>
          <CommentsContainer />
        </div>
      </div>

      <div className='w-full my-4 mr-20'>
        <LiveChat/>
      </div>
    </>
  )
}

export default WatchPage
