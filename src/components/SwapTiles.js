import React, { useEffect, useState } from 'react'
import { Reorder } from "framer-motion"
import { WordTile } from './WordTile'



function SwapTiles(props) {

  const [items, setItems] = useState(props.items);

  return (
        <Reorder.Group className='flex gap-2' axis="x" values={items} onReorder={setItems}>
            {items.map((item) => (
                <WordTile key={item} item={item} />
            ))}
        </Reorder.Group>
  )
}

export default SwapTiles