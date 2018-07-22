import React from 'react';
import { Container } from 'bloomer';
import Navigation from './Navigation';


const Header = (props) => {
  const styles = {
    minHeight: "50px",
    border: "1px solid black",
    margin: "20px 0",
    visibility: "hidden",
  }

  return (
    <header>
      <Container isFluid className="social-icons" style={styles}>
        Social Icons
      </Container>
      <Navigation/>  
    </header>
  )
};

export default Header;