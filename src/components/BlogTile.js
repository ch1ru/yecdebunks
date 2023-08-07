import React from 'react'
import { useNavigate } from 'react-router-dom';

function BlogTile({item}) {
  const navigate=useNavigate();
  return (
    <div key={item.id} className='cursor-pointer bg-[var(--color-white)] flex flex-col text-center w-80 hover:shadow-md shadow-sm p-6 rounded-2xl transition-all mb-4' onClick={()=>navigate('/articles/'+item.id)} >
        <img src={item.coverImage} className='rounded-2xl
           object-cover h-[200px]'/>
        <h3 className='text-blue-700 mt-3 text-center'>{item.tag}</h3>
        <h3 className='font-bold mt-3 text-center'>{item.title}</h3>
        <h3 className='line-clamp-3 text-gray-500 mt-3 break-keep'>{item.desc}</h3>
    </div>
  )
}

export default BlogTile