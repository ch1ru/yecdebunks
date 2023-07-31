import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition';
import { test_posts } from '../data/test_posts';
import { useLocation } from 'react-router-dom'

function Article() {

    let { id } = useParams();
    const location = useLocation()
    const [article, setArticle] = useState(test_posts[0])

    useState(() => {

      var post_id = location.pathname.split('/').slice(-1)[0]
      setArticle(test_posts[post_id])
        
        
    })

  return (
    <PageTransition>
    <div className='pt-20 mx-20'>
        <h1 className=' text-3xl text-center mt-4'>{article.title}</h1>
        <img className='h-48 w-3/4 m-auto mt-4' src={article.coverImage}></img>
        <p className='m-10 break-all'>{article.body}</p>
    </div>
    </PageTransition>

  )
}

export default Article