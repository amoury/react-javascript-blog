import React from 'react';
import { Column, Title } from "bloomer";
import styles from './Blogs.module.css';
import SingleBlog from './SingleBlog';

const PopularPosts = ({posts}) => {
  const postList = posts.map(post => (
    <SingleBlog key={post.id} article={post} />
  ));

  return ( 
    <Column>
      <Column className={"auto " + styles.popular_blogs_column}>
        <Title tag="h2">Popular Articles</Title>
        <div className={styles.popular_blogs}>
          { postList }
        </div>
      </Column>
    </Column>
  )
};

export default PopularPosts;