import React from 'react';
import { Button, Table, Column, Section, Title } from "bloomer";
import styles from './Admin.module.css';

const PostsTable = (props) => {
  return <Column>
      <Button isColor="success" isPulled="right" className={styles.new_post_button}>Add New Post</Button>
      <Section className="section">
        <Title tag="h1">Posts</Title>
        <Table style={{ width: "100%" }}>
          <tr>
            <th>Post Title</th>
            <th>Post Source</th>
            <th>Featured Post</th>
            <th colspan="2">Actions</th>
          </tr>

          <tr>
            <td>Hello World</td>
            <td>Medium</td>
            <td>Star</td>
            <td>
              <Button isColor="dark">Edit</Button>
            </td>
            <td>
              <Button isColor="warning">Delete</Button>
            </td>
          </tr>
        </Table>
      </Section>
    </Column>;
};

export default PostsTable;