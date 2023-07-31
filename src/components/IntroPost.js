import React from 'react'
import { useNavigate } from 'react-router-dom';

function IntroPost({post}) {

  const navigate = useNavigate()

  return (
    post ?
    <div className='grid grid-cols-1 cursor-pointer mx-8
    md:grid-cols-2 h-48 content-center items-center mt-2 md:px-15 lg:px-32 gap-8'>
        <img src={post.coverImage} className='rounded-2xl object-cover w-full h-full' />
        <div>
            <h4 className='text-blue-700 mt-4'>{post.tag}</h4>
            <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
            <div className='flex items-end gap-8'>
              <h4 className='line-clamp-6 text-gray-400 mt-5 break-all'>{post.desc}</h4>
              <button onClick={() => {navigate(`/articles/${post.id}`)}} className=' p-2 rounded-3xl bg-blue-500 px-4'>Read</button>
            </div>
        </div>
    </div>
    :
    <div className='text-center text-gray-500'>Nothing featured</div>
  )
}

export default IntroPost