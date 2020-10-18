import React from 'react';
import {} from 'react-bootstrap';
import {Stepper, Step, StepButton} from '@material-ui/core';
import ShippingDetails from './shipping-details/ShippingDetails';
import WorkInProgress from './work-in-progress/WorkInProgress';
import FinalOutcome from './final-outcome/FinalOutcome';
import Quotation from './quotation/Quotation';
import './phases.css';

class Phases extends React.Component{
  state={
    phases:['Finalize Quotation', 'Work in Progress', 'Final Outcome', 'Shipping details'],
    currentPhase:"Finalize Quotation"
  }

  // Checking if the device is a mobile phone or not
  isMobile = () => {
    if(window.orientation > -1){
        return true 
    }
    else{
        return false
    }
  }

  selectContentType = (phase) => {
    this.setState({currentPhase:phase})
  }

  getContent = () => {
    switch(this.state.currentPhase){
      case 'Finalize Quotation':
        return <Quotation></Quotation>;
      case 'Work in Progress':
        return <WorkInProgress></WorkInProgress>;
      case 'Final Outcome':
        return <FinalOutcome></FinalOutcome>;
      case 'Shipping details':
        return <ShippingDetails></ShippingDetails>
      default:
        break;
    }
  }

  render(){
    return(
      <div id="phases">
        <div className="stepper-container">
          <Stepper activeStep={4} orientation={this.isMobile() ? "horizontal" : "vertical"} style={{padding:24}}  alternativeLabel={this.isMobile() ? true : false}>
            {this.state.phases.map((label, index) => (
              <Step key={index}>
                <StepButton onClick={()=>this.selectContentType(label)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="content">
          {
            this.getContent()
          }
        </div>
      </div>
    )
  }
}

export default Phases;