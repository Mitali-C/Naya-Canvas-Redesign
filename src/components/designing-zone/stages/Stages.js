import React from 'react';
import {Button, Accordion, Card} from 'react-bootstrap';
import stagesData from './stagesData'; 
import Comments from '../../comments/Comments';
import './stages.css';

class Stages extends React.Component{
  state={
    current:"0",
    stages: stagesData
  }

  toggleCurrentValue = (value) => {
    if(this.state.current!==value){
      this.setState({current:value})
    }
    else{
      this.setState({current:null})
    }
  }

  componentDidMount(){
    console.log("stages dummy data: ", stagesData)
  }
  render(){
    return(
      <div id="stages">
        <div class="new-stage">
          <input placeholder="Search stage" className="form-control" style={{width:'11rem'}}/>
          <Button variant="outline-dark"><i className="fa fa-plus-circle" aria-hidden="true"></i> New Stage</Button>
        </div>
        <Accordion defaultActiveKey="0">
          {
            this.state.stages.map((stage, index) => (
              <Card key={index}>
                <Accordion.Toggle as={Card.Header} className={this.state.current===index.toString() ? 'active-stage' : 'inactive-stage'} eventKey={index.toString()} onClick={()=>this.toggleCurrentValue(index.toString())}>
                  <h4> <i className={this.state.current===index.toString() ? "fa fa-minus-circle" : "fa fa-plus-circle"} aria-hidden="true"></i> {stage.stageName}</h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Comments data={stage.comments}/>
                </Accordion.Collapse>
              </Card>
            ))
          }
        </Accordion>
      </div>
    )
  }
}

export default Stages;