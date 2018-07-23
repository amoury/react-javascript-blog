import React from 'react';
import { Columns, Column } from 'bloomer';
import AdminNav from './AdminNav';


const AdminLayout = (props) => {
  return <div>
      <Columns>
        <AdminNav />
        <Column>
          {props.children}
        </Column>
      </Columns>
    </div>;
}

export default AdminLayout;
