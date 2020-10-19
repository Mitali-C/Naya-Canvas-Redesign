import React from 'react';
import {CardDeck, Card, Button, Image, Modal} from 'react-bootstrap';
import './quotation.css';
import Comparison from '../../../../assets/images/comparison_chart.PNG';

class Quotation extends React.Component{
  state = {
    quotations:[
      {
        id:0,
        price:'$500',
        material:"material 1",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwuz-XrdVQbWufN5aAf-3p3ipSd6nkGBc2cg&usqp=CAU"
      },
      {
        id:1,
        price:'$550',
        material:"material 2",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdZyNcaGzkqS87VZp1sXbep7sLvs9pod9oRA&usqp=CAU"
      },
    ],
    selected:0,
    showComparisonChart:false
  }

  toggleComparisonChart = () => {
    this.setState({showComparisonChart:!this.state.showComparisonChart});
  }

  render(){
    return(
      <div id="quotation">
        <h4>Quotation</h4>
        <CardDeck>
          {
            this.state.quotations.map((quotation, index) => (
              <Card key={index}>
                <Card.Img variant="top" src={quotation.image} style={{maxHeight:'10rem'}}/>
                <Card.Body>
                  <Card.Title><span style={{fontWeight:'bold'}}>Price: </span>{quotation.price}</Card.Title>
                  <Card.Text>
                    <h6><span style={{fontWeight:'bold'}}>Material:</span> {quotation.material}</h6>
                    <h6><span style={{fontWeight:'bold'}}>Details:</span> {quotation.details}</h6>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {
                    this.state.selected===quotation.id ? (
                      <h6 style={{color:'green', fontWeight:'bold'}}>Selected</h6>
                    ) : (
                      <Button variant="success" onClick={()=>{this.setState({selected:quotation.id})}}>Select</Button>
                    )
                  }
                  
                </Card.Footer>
              </Card>
            ))
          }
        </CardDeck>
        <div style={{margin:'2rem 0', display:'flex', justifyContent:'center'}}>
          <Button onClick={this.toggleComparisonChart} variant="outline-dark">Generate comparison chart</Button>
        </div>

        <Modal show={this.state.showComparisonChart} size="lg" onHide={this.toggleComparisonChart} centered>
          <Modal.Header style={{borderBottom:0}} closeButton>
            <Modal.Title style={{width:'100%', textAlign:'center'}}>Comparison Chart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={Comparison} alt="comparison chart" fluid/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Quotation;