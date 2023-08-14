import React, { useEffect, useState } from 'react'
import { RiMenuFill , RiSearchLine , RiMicFill , RiVideoAddLine , RiNotification3Line} from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import YoutubeLogo from "../Assests/Youtubelogo.png";
import { useDispatch, useSelector } from 'react-redux';
import {toggleMenu} from "../Utils/appSlice"
import {YOUTUBE_SEARCH_API} from "../Utils/constant";
import { cacheResult } from '../Utils/searchSlice';


const Header = () => {

  const [searchQuery , setSearchQuery] = useState("");
  const [suggestion , setSuggestion] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false);
  
  // console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const menuToggleHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(()=>{

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
      }
    } , 200)

    return () => {
      clearTimeout(timer);
    }
    
  },[searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    dispatch(cacheResult({
      [searchQuery] : json[1],
    }));
  }
  return (
    <>
      <header className='flex justify-between items-center px-2 py-2 mx-4'>

        <div className='flex items-center justify-between w-[80vw]'>

          <div className='flex items-center gap-4'>
            <button onClick={() => menuToggleHandler()} className='px-2 py-2 hover:rounded-full hover:bg-[#E5E5E5]'><RiMenuFill className='text-2xl'/></button>
            <img src={YoutubeLogo} alt="youtube logo" className='w-28 hover:cursor-pointer'/>
          </div>

          <div className='flex items-center'>
          
            <input type="text" className='w-[45vw] px-4 py-2 rounded-l-full outline-none border-[1px] border-[#C6C6C6]' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)}/>
            <button className='bg-[#f0f0f0] px-5 py-2 border-[1px] border-[#C6C6C6] border-l-0 rounded-r-full'><RiSearchLine className='text-2xl'/></button>

            <div className='flex items-center'>
              <button className='bg-[#f0f0f0] mx-4 px-2 py-2 rounded-full hover:bg-[#D9D9D9]'><RiMicFill className='text-2xl'/></button>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-8'>
          <button className='px-2 py-2  hover:rounded-full hover:bg-[#E5E5E5]' ><RiVideoAddLine className='text-2xl'/></button> 
           <button className='px-2 py-2 hover:rounded-full hover:bg-[#E5E5E5]'><RiNotification3Line className='text-2xl'/></button> 
           <button className='px-2 py-2 hover:rounded-full hover:bg-[#E5E5E5]'><RxAvatar className='text-2xl'/></button> 
        </div>

      </header>

        {
          showSuggestion === true ? 
          <div className='bg-white absolute left-[23rem] w-[42rem] rounded-lg shadow-2xl border border-gray-200 '>
                <ul className='my-4'>
                  {
                    suggestion.map(s => {
                      return (<li className='px-3 py-2 flex gap-4 hover:bg-[#EEEEEE] hover:cursor-pointer' key={s}> <RiSearchLine className='text-2xl'/> {s}</li>)
                    })
                  }
                </ul>
          </div> 
          :
          null
        }
        
      
    </>
  )
}

export default Header
