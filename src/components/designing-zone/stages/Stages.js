import React from 'react';
import {Button} from 'react-bootstrap';
import './stages.css';

class Stages extends React.Component{
  render(){
    return(
      <div id="stages">
        <div class="new-stage">
          <Button variant="outline-dark"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Stage</Button>
        </div>
        #TODO: add stages with corresponding comments
      </div>
    )
  }
}

export default Stages;