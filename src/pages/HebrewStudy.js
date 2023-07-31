import React, { useEffect, useState } from 'react'
import PageTransition from '../components/PageTransition'
import * as bereshit from '../HebrewBible/bereshit'
import { IoSearchOutline } from 'react-icons/io5'
import SwapTiles from '../components/SwapTiles'
import { Reorder } from "framer-motion"
import { WordTile } from '../components/WordTile'
import Concordance from '../components/Concordance'

function HebrewStudy() {

    const [bookLocation, setBookChapter] = useState(bereshit)
    const [searchText, setSearchText] = useState("");
  return (
    <PageTransition>
    <div class="grid grid-cols-3 grid-rows-1 gap-4 pt-24">
      <section class="col-span-2 pl-8">

        <h3>Practice your biblical Hebrew!</h3>
        <h3>Put the words in their correct order, click on a word to lookup its meaning.</h3>

      
      {bookLocation.ch1.map(verse => {
          return (
          <div>
          <div className='flex content-center items-center gap-2'>
          <p className='font-bold mt-2 text-xl'>{verse.id}</p>
          <p className='mb-2 mt-6'>{verse.english}</p>
          </div>
          <SwapTiles items={verse.hebrew.split(" ")}/>
          </div>
          )
      })}
      </section>



      <section class="col-span-1 w-full">

      <div className='bg-white shadow-lg p-4 rounded-lg mx-32 mt-4 flex items-center justify-center'>
        <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input onChange={e => setSearchText(e.target.value)} value={searchText} type='text' placeholder='Search' className='outline-none' />
      </div>

      {//<Concordance word='בְּרֵאשִׁית' />
      }

      </section>
    </div>
    </PageTransition>
    
  )
}

export default HebrewStudy