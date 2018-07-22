import React from 'react';
import { Column, Title } from 'bloomer';
import styles from './Blogs.module.css';
import SingleBlog from './SingleBlog';

const LatestPosts = ({posts}) => {
  const postList = posts.map( post => (
    <SingleBlog key={post.id} article={post} />
  ))

  return (
    <Column className={"is-three-fifths " + styles.latest_blogs}>
      <Title tag='h2'>Latest Articles</Title>
      { postList }
    </Column>
  )
};

export default LatestPosts;