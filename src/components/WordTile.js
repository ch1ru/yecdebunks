import React, { useEffect } from 'react'
import { useRaisedShadow } from './Use-raised-shadow'
import { useMotionValue, Reorder } from 'framer-motion'
  
  export const WordTile = ({ item }) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    
  
    return (
      <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
        <p class="outline outline-1 bg-white shadow-md rounded-lg p-2 outline-blue-500">{item}</p>
      </Reorder.Item>
    );
  };