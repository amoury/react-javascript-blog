import React from 'react';
import { Column } from 'bloomer';

import styles from './Admin.module.css';
import { NavLink } from 'react-router-dom';

const AdminNav = (props) => {
  return (
    <Column isSize="1/4">
      <nav className={styles.admin__vertical_navbar}>
        <ul className={styles.admin__menu_links}>
          <li className={styles.admin__menu_link}><NavLink to='/admin/posts'>Posts</NavLink></li>
          <li className={styles.admin__menu_link}><a>Books</a></li>
          <li className={styles.admin__menu_link}><a>Tutorials</a></li>
          <li className={styles.admin__menu_link}><a>Resources</a></li>
          <li className={styles.admin__menu_link}><NavLink to="/">Back to Site</NavLink></li>
        </ul>
      </nav>
    </Column>
  )
};

export default AdminNav;