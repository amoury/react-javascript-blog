import React from 'react';
import { Section, Container, Columns, Column, Title } from "bloomer";
import styles from './Blogs.module.css';
import SingleBlog from './SingleBlog';

const PopularPosts = (props) => {
  return <Column>
      <Column className={"auto " + styles.popular_blogs_column}>
        <Title tag="h2">Popular Articles</Title>
        <div className={styles.popular_blogs}>
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
        </div>
      </Column>
    </Column>;
};

export default PopularPosts;