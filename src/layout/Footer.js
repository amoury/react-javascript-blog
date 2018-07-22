import React from 'react';
import { Columns, Column } from 'bloomer';

const Footer = (props) => {
  return (
    <footer className="footer">
      <Columns>
        <Column isSize="1/2">
          <h1>Stay Updated with latest Javascript Stuff</h1>
          <form>
            <input className="input" type="email" name="email-address" id="email" placeholder="Enter your Email Address" />
          </form>
        </Column>
      </Columns>
    </footer>
  )
};

export default Footer;