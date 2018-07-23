import React from 'react';
import { Button, Table, Column, Section, Title } from "bloomer";
import { withRouter } from 'react-router-dom';
import styles from './Admin.module.css';

const PostsTable = (props) => {
  const onCreatePost = () => {
    props.history.push('posts/new-post');
  }

  return <Column>
      <Button onClick={onCreatePost} isColor="success" isPulled="right" className={styles.new_post_button}>
        Add New Post
      </Button>
      <Section className="section">
        <Title tag="h1">Posts</Title>
        <Table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Post Title</th>
              <th>Post Source</th>
              <th>Featured Post</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>

          <tbody>
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
          </tbody>
        </Table>
      </Section>
    </Column>;
};

export default withRouter(PostsTable);