import React from 'react'
import HomeIcon from "../Assests/Homelogo.png"
import ShortsLogo  from "../Assests/youtubeshortslogo.png"
import { MdSubscriptions , MdVideoLibrary , MdHistory , MdOutlineWatchLater , MdOutlinePlaylistPlay , MdKeyboardArrowDown , MdOutlineMovie} from "react-icons/md";
import { AiOutlinePlaySquare , AiOutlineShopping , AiOutlineTrophy , AiOutlineBulb} from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { PiMusicNoteThin , PiGameControllerLight , PiNewspaperClipping , PiCoatHanger} from "react-icons/pi";
import { RiSignalTowerLine } from "react-icons/ri";
import { useSelector } from "react-redux"
// import ToggleSideMenu from "./ToggleSideMenu";
import {Link} from "react-router-dom";
const Sidebar = () => {
  const isToggleMenu = useSelector(store => store.app.isSideBarOpen);

  if(!isToggleMenu) return null

  return (
    <>
      <aside className='w-[15rem] sticky top-0 left-0'>

        <div className='my-4'>

        <Link to='/'>
          <li className='hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <img src={HomeIcon} alt="homelogo" className='w-[1.5rem]'/>
            <span className='pl-4'>Home</span>
          </li>
        </Link>

          <li className='hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <img src={ShortsLogo} alt="homelogo" className='w-[1.5rem]'/>
            <span className='pl-4'>Shorts</span>
          </li>

          <li className='hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdSubscriptions className='text-2xl'/>
            <span className='pl-4'>Subscriptions</span>
          </li>
          
          <hr className='my-3'/> 
        </div>

         {/*Second div of side bar  */}
        <div className='my-4'>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdVideoLibrary className='text-2xl'/>
            <span className='pl-4'>Library</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdHistory className="text-2xl"/>
            <span className='pl-4'>History</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <AiOutlinePlaySquare className='text-2xl'/>
            <span className='pl-4'>Your Videos</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdOutlineWatchLater className='text-2xl'/>
            <span className='pl-4'>Watch Later</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdOutlinePlaylistPlay className='text-2xl'/>
            <span className='pl-4'>Favourite One</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdKeyboardArrowDown className='text-2xl'/>
            <span className='pl-4'>Show More</span>
          </li>
          
          <hr className='my-3'/> 
        </div>

        {/* Third div of side bar */}
        <div>
          <span className='mx-10 py-5 font-medium text-lg'>Explore</span>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <BsFire className='text-2xl'/>
            <span className='pl-4'>Trending</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <AiOutlineShopping className="text-2xl"/>
            <span className='pl-4'>Shopping</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <PiMusicNoteThin className='text-2xl'/>
            <span className='pl-4'>Music</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <MdOutlineMovie className='text-2xl'/>
            <span className='pl-4'>Movies</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <RiSignalTowerLine className='text-2xl'/>
            <span className='pl-4'>Live</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <PiGameControllerLight className='text-2xl'/>
            <span className='pl-4'>Gaming</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <PiNewspaperClipping className='text-2xl'/>
            <span className='pl-4'>News</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <AiOutlineTrophy className='text-2xl'/>
            <span className='pl-4'>Sports</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <AiOutlineBulb className='text-2xl'/>
            <span className='pl-4'>Learning</span>
          </li>

          <li className='w-[13rem] hover:bg-slate-200 hover:cursor-pointer rounded-lg  list-none flex gap-2 px-3 py-2 mx-6'>
            <PiCoatHanger className='text-2xl'/>
            <span className='pl-4'>Fashion & Beauty</span>
          </li>
          
          <hr className='my-3'/> 
        </div>
      </aside>
    </>
  )
}

export default Sidebar
