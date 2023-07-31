import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogTile from './BlogTile';

function Blogs({posts}) {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-2 md:px-8 lg:px-8 justify-items-center'>
      {
      posts.length > 0 ?

      posts.map((item)=>(
        <BlogTile item={item} />
      ))
      :
      <div className='text-center absolute text-gray-500'>No articles yet!</div>
      }
       
    </div>
  )
}

export default Blogs