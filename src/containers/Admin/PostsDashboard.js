import React, { Component, Fragment } from 'react';
import PostsTable from '../../components/Admin/PostsTable';
import EditPost from '../../components/Admin/EditPost';


class PostsDashboard extends Component {
  render () {
    return (
      <Fragment>
        <EditPost/>
      </Fragment>
    )
  }
}

export default PostsDashboard;