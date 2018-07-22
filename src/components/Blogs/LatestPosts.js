import React from 'react';
import { Section, Container, Columns, Column, Title } from 'bloomer';
import styles from './Blogs.module.css';
import SingleBlog from './SingleBlog';

const LatestPosts = (props) => {
  return (
    <Column className={"is-three-fifths " + styles.latest_blogs}>
      <Title tag='h2'>Latest Articles</Title>
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
    </Column>
  )
};

export default LatestPosts;