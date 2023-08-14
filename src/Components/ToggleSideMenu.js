import React from 'react'
import HomeIcon from "../Assests/Homelogo.png"
import ShortsLogo  from "../Assests/youtubeshortslogo.png"
import { MdSubscriptions , MdVideoLibrary} from "react-icons/md";

const ToggleSideMenu = () => {
  return (
    <>
      <aside className='w-[6rem] h-screen sticky top-0 '>
        
        <li className='list-none hover:bg-slate-100 rounded-lg hover:cursor-pointer flex flex-col gap-1 items-center py-2 mx-2'>
            <img src={HomeIcon} alt="HomeLogo" className='w-[1.5rem]'/>
            <span>Home</span>
        </li>

        <li className='list-none hover:bg-slate-100 rounded-lg hover:cursor-pointer flex flex-col gap-1 items-center py-2 mx-2'>
            <img src={ShortsLogo} alt="ShortsLogo" className='w-[1.5rem]'/>
            <span>Shorts</span>
        </li>

        <li className='list-none hover:bg-slate-100 rounded-lg hover:cursor-pointer flex flex-col gap-1 items-center py-4 mx-2'>
            <MdSubscriptions className='text-2xl'/>
            <span className='text-xs'>Subscriptions</span>
        </li>

        <li className='list-none hover:bg-slate-100 rounded-lg hover:cursor-pointer flex flex-col gap-1 items-center py-2 mx-2'>
            <MdVideoLibrary className='text-2xl'/>
            <span>Library</span>
        </li>
      </aside>
    </>
  )
}

export default ToggleSideMenu
