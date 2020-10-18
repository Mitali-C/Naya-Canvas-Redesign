import React from 'react';
import {Button, Accordion, Card, Modal} from 'react-bootstrap';
import stagesData from './stagesData'; 
import Comments from '../../comments/Comments';
import './stages.css';

class Stages extends React.Component{
  state={
    current:"0",
    stages: stagesData,
    newStageModal:false,
  }

  toggleCurrentValue = (value) => {
    if(this.state.current!==value){
      this.setState({current:value})
    }
    else{
      this.setState({current:null})
    }
  }

  toggleNewStageModal = () => {
    this.setState({newStageModal:!this.state.newStageModal})
  }

  render(){
    return(
      <div id="stages">
        <div className="new-stage">
          <input placeholder="Search stage" className="form-control" style={{width:'11rem'}}/>
          <Button variant="outline-dark" onClick={this.toggleNewStageModal}><i className="fa fa-plus-circle" aria-hidden="true"></i> New Stage</Button>
        </div>
        <Accordion defaultActiveKey="0">
          {
            this.state.stages.map((stage, index) => (
              <Card key={index}>
                <Accordion.Toggle style={{cursor:'pointer'}} as={Card.Header} className={this.state.current===index.toString() ? 'active-stage' : 'inactive-stage'} eventKey={index.toString()} onClick={()=>this.toggleCurrentValue(index.toString())}>
                  <h5> <i className={this.state.current===index.toString() ? "fa fa-minus-circle" : "fa fa-plus-circle"} aria-hidden="true"></i> {stage.stageName}</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Comments data={stage.comments}/>
                </Accordion.Collapse>
              </Card>
            ))
          }
        </Accordion>
        <Modal show={this.state.newStageModal} onHide={this.toggleNewStageModal} centered>
          <Modal.Header style={{borderBottom:0}} closeButton>
            <Modal.Title style={{width:'100%', textAlign:'center'}}>Add new stage!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Type in the new stage name or select one from the pre-defined ones</h6>
            <input className="form-control" type="text" placeholder="Stage name" style={{marginBottom:'1rem'}}/> 
            {
              ['Introduction', 'Sketching', 'Modeling'].map((stage, index) => (
                <Button key={index} variant="outline-dark" className="btn-stage-dark" style={{margin:'0.2rem', height:'3rem', borderRadius:'1.5rem'}}>{stage}</Button>
              ))
            }
          </Modal.Body>
          <Modal.Footer style={{borderTop:0}}>
            <Button variant="outline-success" onClick={this.toggleNewStageModal}>
              ADD STAGE
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Stages;