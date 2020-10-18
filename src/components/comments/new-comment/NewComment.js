import React from 'react';
import {Button} from 'react-bootstrap';
import Author from '../author/Author';
import './new-comment.css';

class NewComment extends React.Component{
  render(){
    return(
      <div id="comment-container">
        <Author></Author>
        <div className="comment-card">
          <div className="comment-buttons-container">
            <Button variant="outline-dark" className="button">Add Text</Button>
            <Button variant="outline-dark" className="button">Add Images</Button>
            {/* TODO: enable this button only when some text or images are addes */}
            <Button variant="dark" className="button">Post</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewComment;