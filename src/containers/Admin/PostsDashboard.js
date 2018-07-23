import React, { Component } from 'react';
import PostsTable from '../../components/Admin/PostsTable';
import AdminLayout from '../../components/Admin/AdminLayout';


class PostsDashboard extends Component {
  render () {
    return (
      <AdminLayout>
        <PostsTable/>
      </AdminLayout>
    )
  }
} 

export default PostsDashboard;