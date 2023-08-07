import React, { useEffect, useState } from 'react'
import banner from '../imgs/cambrian.jpeg'
import { IoSearchOutline } from "react-icons/io5"

function Search(props) {

  const [searchText, setSearchText] = useState("");
  
  return (
    <>
    <div className='text-center justify-center items-center content-center flex-col lg:px-[70] md:px-16 px-4 pt-24'>
        <div class="flex justify-center h-64">
          <img src={props.backdrop} className=' object-cover shadow-md rounded-2xl h-56 w-screen' />
          <div className='bg-white shadow-lg p-4 rounded-lg absolute flex self-end items-end justify-center'>
            <IoSearchOutline className='text-[20px] text-gray-400'/>
            <input onChange={e => {props.updateSearch(e.target.value); setSearchText(e.target.value)}} value={searchText} type='text' placeholder='Search' className='outline-none' />
          </div>
        </div>
        
    </div>

    
    </>
  )
}

export default Search