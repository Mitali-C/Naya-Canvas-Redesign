import React from 'react';
import {} from 'react-bootstrap';
import Author from '../author/Author';
import Media from '../comment-uploads/CommentUploads';
import './single-comment.css';

class SingleComment extends React.Component{
  state = {
    comment:this.props.comment
  }
  render(){
    const {comment} = this.state;
    return(
      <div id="comment-container">
        <Author></Author>
        <div className="single-comment-card">
          {
            comment.text && (
              <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
            )
          }
          {
            comment.images && (
              <>
              {
                comment.images.map((image, index) => (
                  <Media image={image} key={index}></Media>
                ))
              }
              </>
            )
          }
        </div>
      </div>
    )
  }
}

export default SingleComment;