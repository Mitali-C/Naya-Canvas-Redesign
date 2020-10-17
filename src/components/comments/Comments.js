import React from 'react';
import NewComment from './new-comment/NewComment';
import SingleComment from './single-comment/SingleComment';
import './comments.css';

class Comments extends React.Component{
  render(){
    return(
      <div>
        <NewComment/>
        <SingleComment/>
      </div>
    )
  }
}

export default Comments;