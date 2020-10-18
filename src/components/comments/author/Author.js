import React from 'react';
import './author.css';

class Author extends React.Component{
  render(){
    return(
      <div id="user-container">
        <div className="user-icon"><i className="fa fa-user-circle fa-2x" aria-hidden="true"></i></div>
        <div>
          <h6>Mitali</h6>
          <p>1 min ago</p>
        </div>
      </div>
    )
  }
}

export default Author;