import React from 'react';
import {Modal, Button, Alert} from 'react-bootstrap';
import './schedule-call.css';

class ScheduleCall extends React.Component{
  state={
    available_time_slots:['8am - 8:30am', '10am - 10:30am', '10:30am - 11am', '1pm - 1:30pm', '4:30pm - 5pm'],
    time_slots:[], 
    email:'', 
    schedule_success:'Thanks! We will get back to you shortly with further details regarding the call!',
    show_success_alert:false
  }

  selectTime = (time) => {
    if(this.state.time_slots.includes(time)){
      let temp = this.state.time_slots;
      temp = temp.filter(x=>x!==time);
      this.setState({time_slots:temp})
    }
    else{
      let temp = this.state.time_slots;
      temp.push(time);
      this.setState({time_slots:temp})

    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  schedule = () => {
    this.setState({show_success_alert:true, email:'', time_slots:[]})
  }

  close = () => {
    this.setState({email:'', show_success_alert:false, time_slots:[]});
    this.props.toggle()
  }

  render(){
    return(
      <Modal show={this.props.show} onHide={this.close} animation={false} centered id="schedule-call">
        <Modal.Header closeButton style={{borderBottom:'none'}}>
          <Modal.Title style={{textAlign:'center', width:'100%'}}>Schedule a call with your designer!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            this.state.show_success_alert && (
              <Alert variant="success">
                {this.state.schedule_success}
              </Alert>
            )
          }
          <label style={{marginTop:'1rem', fontWeight:'bold'}}>Your Email</label>
          <input className="form-control" name="email" onChnage={this.onChange} type="text" placeholder="Enter your email"/>
          <label style={{marginTop:'1rem', fontWeight:'bold'}}>Available time slots</label>
          <div>
            {
              this.state.available_time_slots.map((slot, index) => (
                <Button key={index} onClick={()=>this.selectTime(slot)}  variant="outline-dark" className={this.state.time_slots.includes(slot) && 'selected-slot'}>{slot}</Button>
              ))
            }
          </div>
        </Modal.Body>
        <Modal.Footer style={{borderTop:'none'}}>
          <Button variant="outline-success" onClick={this.schedule}>
            Schedule
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ScheduleCall;