import React from 'react';
import {Image, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap'
import './comment-uploads.css';

class CommentUploads extends React.Component{
  state={
    expand:false
  }

  getStatus = () => {
    switch(this.props.image.status){
      case 'accepted':
        return(
          <h6 style={{backgroundColor:'#32cd32', color:'#FFF', padding:'0.5rem'}}>Accepted!</h6>
        )
      case 'rejected':
        return(
          <h6 style={{backgroundColor:'red', color:'#FFF', padding:'0.5rem'}}>Rejected!</h6>
        )
      case 'changes_required':
        return(
          <h6 style={{backgroundColor:'#1ac5ff', color:'#FFF', padding:'0.5rem'}}>Changes required!</h6>
        )
      default:
        break;
    }
  }

  handleClose = () => {
    this.setState({expand:false})
  }

  render(){
    return(
      <div id="image-container">
        <div className="image-status">
          {
            this.getStatus()
          }
        </div>
        <Image src={this.props.image.link} alt="media" fluid/>
        <div className="icon icons-container">
          <div className="icon accept-controls">
            <OverlayTrigger
              placement={'auto'}
              overlay={
                <Tooltip >
                  <strong>Accept the idea</strong>
                </Tooltip>
              }
            >
              <span className="icon fa-stack">
                <i style={{color:'#32cd32'}} className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-check fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </OverlayTrigger>
            <OverlayTrigger
              placement={'auto'}
              overlay={
                <Tooltip >
                  <strong>Reject the idea</strong>
                </Tooltip>
              }
            >
              <span className="icon fa-stack">
                <i style={{color:'red'}} className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </OverlayTrigger>
            <OverlayTrigger
              placement={'auto'}
              overlay={
                <Tooltip >
                  <strong>Need some changes!</strong>
                </Tooltip>
              }
            >
              <span className="icon fa-stack">
                <i style={{color:'#1ac5ff'}} className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-question fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </OverlayTrigger>
          </div>
          <div className="icon image-controls">
            <div onClick={()=>{this.setState({expand:true})}}>
              <span className="icon fa-stack">
                <i className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-expand fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </div> 
            <div>
              <span className="icon fa-stack">
                <i className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-download fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </div> 
            <div>
              <span className="icon fa-stack">
                <i className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-undo fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </div>
            <div>
              <span className="icon fa-stack">
                <i className="icon fa fa-circle  fa-stack-2x" aria-hidden="true"></i>
                <i style={{color:'#fff'}} className="icon fa fa-share fa-stack-1x fa-inverse" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <Modal show={this.state.expand} onHide={this.handleClose} size="lg" centered>
          <Modal.Header closeButton style={{border:'none'}}>
          </Modal.Header>
          <Modal.Body style={{display:'flex', justifyContent:'center'}}>
            <Image src={this.props.image.link} fluid alt="expanded image"/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default CommentUploads;