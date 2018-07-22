import React from 'react';
import { Column } from 'bloomer';
import styles from "./Books.module.css";
import bookImage from "../../assets/images/books/javascript and jquery.jpg";

const BookCard = (props) => {
  return (
    <a href="https://www.amazon.com" target='_blank'>
      <Column className={styles.book_card}>
        <img src={bookImage} alt="" />
        <h3 className={styles.book_title}>Javascript and JQuery</h3>
        <span className={styles.book_author}>Jon Duckket</span>
      </Column>
    </a>
  )
};

export default BookCard;