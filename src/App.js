import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/Admin/AdminDashboard';
import BookIndex from './containers/BookIndex';
import BlogIndex from './containers/BlogIndex';
import PostsDashboard from './containers/Admin/PostsDashboard';
import EditPost from './components/Admin/EditPost';

//components


//styles


class App extends Component {
  render() {
    return <div className="App">
        <Switch>
          <Route path="/books" component={BookIndex} />
          <Route path="/admin/posts/new-post" component={EditPost} />
          <Route exact path="/admin/posts" component={PostsDashboard} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/" component={BlogIndex} />
        </Switch>
      </div>;
  }
}

export default App;
