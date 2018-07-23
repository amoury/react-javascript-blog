import React, { Component } from 'react';
import { Section, Columns } from 'bloomer';
import styles from './BookIndex.module.css';
import BookList from '../components/Books/BookList';
import BookDetail from '../components/Books/BookDetail';
import Layout from '../layout/Layout';

class BookIndex extends Component {
  render () {
    return (
      <Layout>
        <Section className={styles.book_section}>
          <Columns isMobile>
            <BookList />
            <BookDetail/>
          </Columns>
        </Section>
      </Layout>
    );
  }
}

export default BookIndex;