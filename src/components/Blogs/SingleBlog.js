import React from 'react';
import {} from 'bloomer';
import styles from './Blogs.module.css';

const SingleBlog = (props) => {
  return <article>
      <h3 className={styles.article_heading}>Hello World</h3>
      <div className={styles.excerpt}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repudiandae blanditiis hic, iure eos veritatis quam sint voluptate
          nisi explicabo. Libero error nulla quae ex esse, quos beatae facilis
          hic?
        </p>
      </div>
      <div className={styles.meta_data}>
        <p>
          Article by
          <span className={styles.author_name}> Olga Khan </span>
          / curated from
          <span class={styles.source_name}>
            <a href="#"> Medium</a>
          </span>
        </p>
      </div>
    </article>;
};

export default SingleBlog;