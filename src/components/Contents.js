import React from 'react'
import { Books } from '../HebrewBible/Tanach/Chapters'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Contents(props) {
  return (
    <div>
    <h1 className='pt-40 justify-center text-center text-3xl font-bold'>Contents</h1>
    <div className='grid grid-cols-6 gap-x-6 gap-y-3 px-60 mt-6'>
    {
    Books.map((book) => {
        return (
            <motion.a href={`/hebrewstudy/${book}`} replace={true} className='p-2 mt-4 text-center text-sm rounded-2xl shadow-md hover:shadow-lg text-white bg-cyan-800'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >{book}</motion.a>
        )
    })}
    </div>
    </div>
  )
}

export default Contents