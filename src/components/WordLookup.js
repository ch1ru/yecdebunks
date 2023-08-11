import React from 'react'
import { motion } from 'framer-motion'

function WordLookup(props) {
  return (
    <div className={props.visible ? `visible absolute` : `hidden absolute`}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            className={`h-auto w-28 outline outline-2 outline-blue-500 rounded-md text-center absolute -mt-24 p-3 bg-[--color-background] flex-col justify-between gap-8`}>
            <h1 className=''>{props.word}</h1>
            <a className='text-sm' target='_blank' href={`https://www.sefaria.org/search?q=${props.word}&tab=text&tvar=1&tsort=relevance&svar=1&ssort=relevance`}>See BDB</a>
        </motion.div>
    </div>
    
  )
}

export default WordLookup