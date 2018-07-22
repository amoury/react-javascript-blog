import React from 'react';
import { Column, Title } from 'bloomer';
import styles from './Books.module.css';
import bookImage from "../../assets/images/books/javascript and jquery.jpg";


const BookDetail = (props) => {
  return <Column>
      <div className={styles.book_details_box}>
        <Title tag="h2" className="has-text-centered">
          Javascript & Jquery
        </Title>
        <img src={bookImage} alt="" />
        <div className={styles.book_metadata + " has-text-centered"}>
          <p className={styles.author}>
            Author: <strong>Jon Duckett</strong>
          </p>
        </div>

        <Title tag="h3" className="has-text-centered">Book Summary</Title>
        <div className={styles.book_summary}>
          <p>
            Learn How To Read and write JavaScript Make your sites more
            interactive Use jQuery to simplify your code Recreate popular web
            techniques Techniques Include Slideshows and lightboxes Improved
            forms and validation Using Ajax, APIs, and JSON Filtering,
            searching, and sorting Online Support Code samples and practical
            exercises available online at:www.javascriptbook.com Plus bonus
            reference materials Welcome to a nicer way to learn JavaScript &
            jQuery. Are you new to JavaScript, or have you added scripts to
            your webpage but want a better idea of how they work? Then this
            book is foryou. We'll not only show you how to read and write
            JavaScript, butwe'll also teach you the basics of computer
            programming in asimple, visual way. All you need is an
            understanding of HTML andCSS. This book will teach you how to make
            your websites moreinteractive, engaging, and usable. It does this
            by combiningprogramming theory with examples that demonstrate how
            JavaScriptand jQuery are used on popular sites. In no time at all
            you will beable to think and code like a programmer.
          </p>
        </div>
      </div>
    </Column>;
};


export default BookDetail;