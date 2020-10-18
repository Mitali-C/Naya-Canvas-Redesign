import React from 'react';
import NewComment from './new-comment/NewComment';
import SingleComment from './single-comment/SingleComment';
import {} from 'react-bootstrap';
import './comments.css';

class Comments extends React.Component{
  state={
    comments:this.props.data
  }
  render(){
    return(
      <div id="comments">
        <NewComment/>
        {
          this.state.comments.map((comment, index)=>(
            <SingleComment comment={comment} key={index}/>
          ))
        }
      </div>
    )
  }
}

export default Comments;