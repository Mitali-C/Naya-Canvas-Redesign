import React from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap';
import './designing-zone.css';
import Stages from './stages/Stages';
import AcceptedIdeas from './accepted-ideas/AcceptedIdeas';

class DesigningZone extends React.Component{
  state={
    
  }
  render(){
    return(
      <Container id="designing-zone">
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
      </Container>
    )
  }
}

export default DesigningZone;