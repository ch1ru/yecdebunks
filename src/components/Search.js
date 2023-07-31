import React, { useEffect, useState } from 'react'
import banner from '../imgs/cambrian.jpeg'
import { IoSearchOutline } from "react-icons/io5"

function Search(props) {

  const [searchText, setSearchText] = useState("");
  
  return (
    <>
    <div className='text-center justify-center items-center content-center flex-col px-[70] md:px-[150px] pt-24'>
        <div class="flex justify-center">
          <img src={props.backdrop} className=' object-cover shadow-md rounded-2xl h-52 w-screen' />
        </div>
        <div className='bg-white shadow-lg p-4 rounded-lg absolute mt-[-20px] mx-[20%] flex items-center justify-center'>
            <IoSearchOutline className='text-[20px] text-gray-400'/>
            <input onChange={e => {props.updateSearch(e.target.value); setSearchText(e.target.value)}} value={searchText} type='text' placeholder='Search' className='outline-none' />
        </div>
    </div>

    
    </>
  )
}

export default Search