import React, { Component, Fragment } from 'react';
import {Section, Columns} from 'bloomer';
import styles from './BlogIndex.module.css';
import FeaturedPost from '../components/Blogs/FeaturedPost';
import LatestPosts from '../components/Blogs/LatestPosts';
import PopularPosts from '../components/Blogs/PopularPosts';

const featuredPost = {
  title: "Hello World",
  excerpt: "Donec sollicitudin molestie malesuada.",
  imageUrl: "https://picsum.photos/500/900?random"
};

const latestPosts = [
  {
    id: "002",
    title: "Hello World",
    excerpt: "Donec sollicitudin molestie malesuada.",
    imageUrl: "https://picsum.photos/500/900?random",
    author: 'Olga Khan',
    source: 'Medium',
    sourceUrl: 'https://www.medium.com'
  },
  {
    id: "005",
    title: "Second Post",
    excerpt: "Donec sollicitudin molestie malesuada.",
    imageUrl: "https://picsum.photos/500/900?random",
    author: 'Olga Khan',
    source: 'Medium',
    sourceUrl: 'https://www.medium.com'
  },
  {
    id: "009",
    title: "Third Post",
    excerpt: "Donec sollicitudin molestie malesuada.",
    imageUrl: "https://picsum.photos/500/900?random",
    author: 'Olga Khan',
    source: 'Medium',
    sourceUrl: 'https://www.medium.com'
  }, 
];

const popularPosts = [
  {
    id: "010",
    title: "Hello World",
    excerpt: "Donec sollicitudin molestie malesuada.",
    imageUrl: "https://picsum.photos/500/900?random",
    author: "Olga Khan",
    source: "Medium",
    sourceUrl: "https://www.medium.com"
  },
  {
    id: "013",
    title: "Hello World",
    excerpt: "Donec sollicitudin molestie malesuada.",
    imageUrl: "https://picsum.photos/500/900?random",
    author: "Olga Khan",
    source: "Medium",
    sourceUrl: "https://www.medium.com"
  },
  {
    id: "015",
    title: "Hello World",
    excerpt: "Donec sollicitudin molestie malesuada.",
    imageUrl: "https://picsum.photos/500/900?random",
    author: "Olga Khan",
    source: "Medium",
    sourceUrl: "https://www.medium.com"
  },
];

class BlogIndex extends Component {
  state = {
    featuredPost: featuredPost,
    latestPosts: latestPosts,
    popularPosts: popularPosts
  };

  render () {
    return <Fragment>
        <FeaturedPost post={this.state.featuredPost} />
        <Section className={"container " + styles.full_blog_list}>
          <Columns className={styles.columns}>
            <LatestPosts posts={this.state.latestPosts} />
            <PopularPosts posts={this.state.popularPosts} />
          </Columns>
        </Section>
      </Fragment>;
  }
}

export default BlogIndex;