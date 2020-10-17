import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './navbar.css';
 
class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  checkIfActive = (data) => {
    let link = window.location.href.split('/')[3];
    if(link===data){
      return true;
    }
    else{
      return false;
    }
  }
 
  render() {
    return (
      <Navbar bg="transparent" expand="lg" variant="dark">
        <Navbar.Brand href="/">naya</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" active={this.checkIfActive('')}>My Canvas</Nav.Link>
            <Nav.Link href="/designing-zone" active={this.checkIfActive('designing-zone')}>Designing Zone</Nav.Link>
            <Nav.Link href="/fabricating-zone" active={this.checkIfActive('fabricating-zone')}>Fabricating zone</Nav.Link>
            {/* <hr></hr> */}
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
 
export default SideBar;