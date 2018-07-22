import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import styles from './Navigation.module.css';
import logo from '../assets/images/logo.svg';

const Navigation = (props) => {
  return <Container>
      <Columns>
        <Column className={styles.logo_wrapper + " is-three-fifth"}>
          <div className={styles.logo_box}>
            <img src={logo} alt="Main Logo" />
          </div>
          <span className={styles.current_date}>19 July 2018 / 22:42 /</span>
        </Column>
        <Column className={"auto " + styles.search_column}>
          <form type="search">
            <input className={"input " + styles.search_field} name="search" type="text" placeholder="Search..." />
          </form>
        </Column>
      </Columns>

      <nav className="columns">
        <Column isSize="1/3" className={styles.hr_line_column}>
          <div className={styles.horizontal_line} />
        </Column>
        <Column className="auto">
          <div className={styles.menu_links_wrapper}>
            <ul className={styles.menu_links}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Other Resources</a>
              </li>
            </ul>
          </div>
        </Column>
      </nav>
    </Container>;
};

export default Navigation;