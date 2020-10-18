import React from 'react';
import {Container, Tabs, Tab, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './designing-zone.css';
import Stages from './stages/Stages';
import AcceptedIdeas from './accepted-ideas/AcceptedIdeas';
import ScheduleCall from './schedule-call/ScheduleCall';

class DesigningZone extends React.Component{
  state={
    callModal:false
  }

  toggleCall = () => {
    this.setState({callModal:!this.state.callModal})
  }

  render(){
    return(
      <Container id="designing-zone">
        <ScheduleCall show={this.state.callModal} toggle={this.toggleCall}/>
        <h5><span style={{fontWeight:'bold'}}>Client Name: </span>Client</h5>
        <h5><span style={{fontWeight:'bold'}}>Designer Name: </span>Designer</h5> #todo: add an info icon which will redirect to the designer details page
        <hr></hr>
        <Tabs defaultActiveKey="stages" id="uncontrolled-tab-example">
          <Tab eventKey="stages" title="Stages">
            <Stages></Stages>
          </Tab>
          <Tab eventKey="accepted_ideas" title="Accepted Ideas">
            <AcceptedIdeas></AcceptedIdeas>
          </Tab>
        </Tabs>
        
        <OverlayTrigger
          placement={'auto'}
          overlay={
            <Tooltip >
              Schedule a call with your designer!
            </Tooltip>
          }
        >
          <Button className="call-button" onClick={this.toggleCall}>
            <i class="fa fa-phone call-icon" aria-hidden="true"></i>
          </Button>
        </OverlayTrigger>
        
        <OverlayTrigger
          placement={'auto'}
          overlay={
            <Tooltip >
              Need help?
            </Tooltip>
          }
        >
          <Button className="info-button">
            <i class="fa fa-info info-icon" aria-hidden="true"></i>
          </Button>
        </OverlayTrigger>
      
      </Container>
    )
  }
}

export default DesigningZone;