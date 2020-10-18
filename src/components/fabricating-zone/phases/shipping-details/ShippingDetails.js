import React from 'react';
import './shipping-details.css';

class ShippingDetails extends React.Component{
  render(){
    return(
      <div id="wip">
        <h4>Shipping Details</h4>
        <div style={{width:'fit-content', margin:'auto', marginTop:'2rem'}}>
          <h6><span style={{fontWeight:'bold'}}>Courier Service: </span>BlueDart</h6>
          <h6><span style={{fontWeight:'bold'}}>Shipping id: </span>65783235642</h6>
          <h6><span style={{fontWeight:'bold'}}>Expected Delivery: </span>18th October, 2020</h6>
          <a href="#">Trak Shipment</a>
        </div>
      </div>
    )
  }
}

export default ShippingDetails;