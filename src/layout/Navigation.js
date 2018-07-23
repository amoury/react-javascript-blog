import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import styles from './Navigation.module.css';
import logo from '../assets/images/logo.svg';

const Navigation = (props) => {
  return <Container>
      <Columns>
        <Column className={styles.logo_wrapper + " is-three-fifth"}>
          <div className={styles.logo_box}>
            <img src={logo} alt="Main Logo" />
          </div>
          <span className={styles.current_date}>
            {moment().format("DD MMMM YYYY / hh:mm")}
          </span>
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
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/books">Books</NavLink>
              </li>
              <li>
                <a href="/tutorials">Tutorials</a>
              </li>
              <li>
                <a href="/resources">Other Resources</a>
              </li>
            </ul>
          </div>
        </Column>
      </nav>
    </Container>;
};

export default Navigation;