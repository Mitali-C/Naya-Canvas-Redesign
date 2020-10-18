import React from 'react';
import {Container, Accordion, Card, Button}  from 'react-bootstrap';
import {Stepper, Step, StepButton} from '@material-ui/core';
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

  navigateToPhase = (phase) => {
    switch(phase){
      case 'Start':
        window.location.href="/";
        break;
      case 'Designing':
        window.location.href="/designing-zone";
        break;
      case 'Fabricating':
        window.location.href="/fabricating-zone";
        break;
      default:
        return;
    }
  }

  render(){
    return(
      <Container id="canvas-container">
        <div style={{marginBottom:'2rem'}}>
          <Stepper activeStep={4} orientation={"horizontal"}alternativeLabel>
            {['Start', 'Designing', 'Fabricating'].map((label, index) => (
              <Step key={index}>
                <StepButton onClick={()=>this.navigateToPhase(label)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle style={{cursor:'pointer'}} as={Card.Header} eventKey="0" onClick={()=>this.toggleCurrentValue(0)}>
              <h5> <i className={this.state.current===0 ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i> General Questions</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="canvas-tiles-container">
                  <div className="canvas-tile"></div>
                  <div className="canvas-tile"></div>
                  <div className="canvas-tile"></div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle style={{cursor:'pointer'}} as={Card.Header} eventKey="1" onClick={()=>this.toggleCurrentValue(1)}>
              <h5 > <i className={this.state.current===1 ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i> Moodboards</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="canvas-tiles-container">
                  <div className="canvas-tile"></div>
                  <div className="canvas-tile"></div>
                  <div className="canvas-tile"></div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle style={{cursor:'pointer'}} as={Card.Header} eventKey="2" onClick={()=>this.toggleCurrentValue(2)}>
              <h5> <i className={this.state.current===2 ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i> Uploads</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div className="canvas-tiles-container">
                  <div className="canvas-tile"></div>
                  <div className="canvas-tile"></div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div style={{margin:'3rem', display:'flex', justifyContent:'center'}}>
          <Button variant="outline-dark">View Similar Canvases</Button>
        </div>
      </Container>
    )
  }
}

export default Canvas;