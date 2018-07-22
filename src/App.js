import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BlogIndex from './containers/BlogIndex';
import BookIndex from './containers/BookIndex';

//components


//styles


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <main style={{minHeight: '90vh'}}>
            <BookIndex />
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
