import React from 'react';
import { Column } from 'bloomer';
import styles from './Books.module.css';
import BookCard from './BookCard';

const BookList = (props) => {
  return (
    <Column className={'is-three-fifths'}>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </Column>
  )
};

export default BookList;