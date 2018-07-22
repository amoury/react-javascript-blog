import React, { Component, Fragment } from 'react';
import {Section, Columns} from 'bloomer';
import styles from './BlogIndex.module.css';
import FeaturedPost from '../components/Blogs/FeaturedPost';
import LatestPosts from '../components/Blogs/LatestPosts';
import PopularPosts from '../components/Blogs/PopularPosts';

class BlogIndex extends Component {
  render () {
    return <Fragment>
        <FeaturedPost />
        <Section className={"container " + styles.full_blog_list}>
          <Columns className={styles.columns} >
            <LatestPosts />
            <PopularPosts />
          </ Columns>
        </Section>
      </Fragment>;
  }
}

export default BlogIndex;