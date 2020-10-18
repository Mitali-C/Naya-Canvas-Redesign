import React from 'react';
import {Image} from 'react-bootstrap';
import './final-outcome.css';

class FinalOutcome extends React.Component{
  state={
    images:[
      "https://images.custommade.com/sFINuY4WaegoVvcCSIjxMJAgPr8=/custommade-photosets/8b658a8805cc7ac_big_rustic_table_5.jpg",
      "https://i.etsystatic.com/5245848/r/il/bd3a1c/1597234260/il_570xN.1597234260_naxu.jpg"

    ]
  }
  render(){
    return(
      <div id="wip">
        <h4>Final Outcome</h4>
        <div className="images-container">
          {
            this.state.images.map((image, index) => (
              <div className="image-card" key={index}>
                <Image src={image} alt="wip" fluid/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default FinalOutcome;