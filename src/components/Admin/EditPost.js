import React, {Component} from 'react';
import { Column, Field, Label, Control, Input, Button } from 'bloomer';
import ReactQuill from 'react-quill';
import AdminLayout from './AdminLayout';

class EditPost extends Component {

  render() {
    return (
      <AdminLayout>
        <Column isSize="1/2">
          <form>
            <Field>
              <Label>Title</Label>
              <Control>
                <Input type="text" name="title" placeholder='Enter the Title' />
              </Control>
            </Field>
      
            <Field>
              <Label>Author Name</Label>
              <Control>
                <Input type="text" name="author" placeholder="Enter the Author's name " />
              </Control>
            </Field>
            
            <Field>
              <Label>Source</Label>
              <Control>
                <Input type="text" name="source" placeholder="Enter the Source" />
              </Control>
            </Field>
            
            <Field>
              <Label>Source URL</Label>
              <Control>
                <Input type="text" name="sourceUrl" placeholder="Enter the Source URL" />
              </Control>
            </Field>
            
            <Field>
              <Label>Content</Label>
              <Control>
                <ReactQuill theme="snow"/>
              </Control>
            </Field>

            <Button isColor='danger'>Cancel</Button>
            <Button isColor='success' type="submit">Submit</Button>

          </form>


        </Column>
      </AdminLayout>
    );
  }
}

export default EditPost;