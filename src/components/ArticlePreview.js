import React, { Component } from 'react'
import Carousel from "react-elastic-carousel"
import { test_posts } from '../data/test_posts';
import Blogs from './Blogs';
import BlogTile from './BlogTile';

const breakpoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
];

class ArticlePreview extends Component {

  state = {
    items: [
      {id: 1, title: 'items1'},
      {id: 2, title: 'items2'},
      {id: 3, title: 'items3'},
      {id: 4, title: 'items4'},
      {id: 5, title: 'items5'},
      {id: 6, title: 'items6'},
    ]
  }
  render() {
    const { items } = this.state;
    return (
    <div>
      <Carousel breakPoints={breakpoints}>
        {test_posts.map(item => <BlogTile item={item} />)}
      </Carousel>
    </div>
    )
  }
}

export default ArticlePreview