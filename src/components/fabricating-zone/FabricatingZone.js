import React from 'react';
import {Container, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './fabricating-zone.css';
import ScheduleCall from '../designing-zone/schedule-call/ScheduleCall';

class FabricatingZone extends React.Component{
  state={
    callModal:false
  }

  toggleCall = () => {
    this.setState({callModal:!this.state.callModal})
  }

  render(){
    return(
      <Container id="fabricating-zone">
        <ScheduleCall show={this.state.callModal} toggle={this.toggleCall}/>
        <h5><span style={{fontWeight:'bold'}}>Client Name: </span>Client</h5>
        <div style={{display:'flex', flexWrap:'wrap', alignItems:'center'}}>
          <h5><span style={{fontWeight:'bold'}}>Fabricator Name: </span>Fabricator</h5>
          <OverlayTrigger
            placement={'auto'}
            overlay={
              <Tooltip >
                Know your fabricator!
              </Tooltip>
            }
          >
            <Button className="fabricating-info">
              <i class="fa fa-info fabricating-info-icon" aria-hidden="true"></i>
            </Button>
          </OverlayTrigger>
        </div>
        <hr></hr>
        
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

export default FabricatingZone;