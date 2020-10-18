import React from 'react';
import {Container, Accordion, Card}  from 'react-bootstrap';
import './canvas.css';

class Canvas extends React.Component{
  state={
    current:0,
  }

  toggleCurrentValue = (value) => {
    if(this.state.current!==value){
      this.setState({current:value})
    }
    else{
      this.setState({current:null})
    }
  }

  render(){
    return(
      <Container id="canvas-container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" onClick={()=>this.toggleCurrentValue(0)}>
              <h5> <i className={this.state.current===0 ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i> General Questions</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>TODO: add dummy data</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" onClick={()=>this.toggleCurrentValue(1)}>
              <h5> <i className={this.state.current===1 ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i> Moodboards</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>TODO: add dummy data</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" onClick={()=>this.toggleCurrentValue(2)}>
              <h5> <i className={this.state.current===2 ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i> Uploads</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>TODO: add dummy data</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    )
  }
}

export default Canvas;