import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import SelectTag from '../components/SelectTag'
import IntroPost from '../components/IntroPost'
import { test_posts } from '../data/test_posts'
import Blogs from '../components/Blogs'
import PageTransition from '../components/PageTransition'
import { tags } from '../data/tags'

function Article() {

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const [searchedPosts, setSearchedPosts] = useState(test_posts);
  const [img, setImg] = useState(tags[0].img)

  const updateSearch = async (search) => {
    setSearch(search);
    FilterArticles(search, tag)
  };

  const updateTag = async (tag) => {
    setTag(tag)
    if(tag.toLocaleLowerCase() == 'geology') {
      setImg(tags[0].img)
    }
    else if(tag.toLocaleLowerCase() == 'mythology') {
      setImg(tags[2].img)
    }
    else if(tag.toLocaleLowerCase() == 'genetics') {
      setImg(tags[4].img)
    }
    else if(tag.toLocaleLowerCase() == 'flood') {
      setImg(tags[3].img)
    }
    else if(tag.toLocaleLowerCase() == 'archeology') {
      setImg(tags[1].img)
    }
    FilterArticles(search, tag)
  }

  function FilterArticles(search, tag) {
    var search = search.toLowerCase();
    var matches = []
    test_posts.map(post => {
      if (post.title.toLowerCase().includes(search) || post.desc.toLocaleLowerCase().includes(search)) {
        if (post.tag == tag) {
          matches.push(post);
        }
      }
    })
    setSearchedPosts(matches)
  }

  return (
    <PageTransition>
    <Search updateSearch={updateSearch} backdrop={img} />
    <SelectTag updateTag={updateTag}/>
    <h1 class="md:pl-8 lg:ml-32 mt-8 text-gray-500 text-xl font-light">FEATURED</h1>
    <IntroPost post={searchedPosts[0]}/>
    <hr class="mt-12 mx-48"></hr>
    <h1 class="mt-12 mb-8 text-gray-500 text-center font-light text-xl">ARTICLES</h1>
    <Blogs posts={searchedPosts} />
    </PageTransition>
  )
}

export default Article