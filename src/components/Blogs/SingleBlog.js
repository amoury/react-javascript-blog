import React from 'react';
import {} from 'bloomer';
import styles from './Blogs.module.css';

const SingleBlog = ({article}) => {
  return <article>
      <h3 className={styles.article_heading}>{article.title}</h3>
      <div className={styles.excerpt}>
        <p>
          {article.excerpt}
        </p>
      </div>
      <div className={styles.meta_data}>
        <p>
          Article by
          <span className={styles.author_name}> {article.author} </span>
          / curated from
          <span className={styles.source_name}>
            <a href={article.sourceUrl}> {article.source}</a>
          </span>
        </p>
      </div>
    </article>;
};

export default SingleBlog;