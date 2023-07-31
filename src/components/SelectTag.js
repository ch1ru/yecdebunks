import React, {useEffect, useState} from 'react'
import { tags } from '../data/tags'

function SelectTag(props) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex gap-10 justify-center mt-16 content-center items-center'>
        {tags.map((item, index) => {
            return (
                <ul onClick={() => {setActiveIndex(index); props.updateTag(tags[index].name)}} className={`${index == activeIndex ? 'bg-red-500 text-white' : null} p-1 pb-2 rounded-sm
                md:rounded-full cursor-pointer md:px-4
                hover:scale-110
                transition-all duration-100 ease-in-out`}>
                    <li>{item.name}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default SelectTag