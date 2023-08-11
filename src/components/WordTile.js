import React, { useState } from 'react'
import WordLookup from './WordLookup';
  
  export const WordTile = (props) => {

    const [hoverWord, setHoverWord] = useState(false)
    const [hoverTile, setHoverTile] = useState(false)

    return (
          <div>
            <WordLookup visible={hoverWord} word={props.item} />
            <span
              onMouseOver={() => {setHoverWord(true)}} 
              onMouseLeave={() => {setHoverWord(false)}} 
              className=" cursor-pointer hover:text-blue-500 hover:scale-105 transition-all text-2xl">
                {props.item}
            </span>
          </div>
    );
  };