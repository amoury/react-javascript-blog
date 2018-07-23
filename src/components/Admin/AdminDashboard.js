import React from 'react';
import { Columns } from 'bloomer';
import AdminNav from './AdminNav';
import PostsDashboard from '../../containers/Admin/PostsDashboard';


const AdminDashboard = (props) => {
  return (
    <Columns>
      <AdminNav />
      <PostsDashboard/>
    </Columns>
  )
};

export default AdminDashboard;