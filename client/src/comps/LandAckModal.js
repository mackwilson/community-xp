import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
  getShowLandAck,
  viewLandAck
} from '../store/userSlice.js';

import text from '../assets/text/pageText.json';


export default function LandAckModal(props) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(viewLandAck());

  const [closeable, setCloseable] = useState(false);
  const show = useSelector(getShowLandAck);    
  
  const headerWithClose = <Modal.Header closeButton />;
  const headerNoClose = <Modal.Header />;

  
  // don't show the close button for 5s, encourage user to actually read
  useEffect(() => {
    setTimeout(() => {
      setCloseable(true)
    }, 5000)
   }, [])
  
  return (
    <div>
      <Modal 
        show={show} 
        onHide={handleClose} 
        centered 
        backdrop="static" // prevent user from clicking outside to close modal
        keyboard={ false } // prevent user from using ESC key to close modal
      >
      
        { closeable ? headerWithClose : headerNoClose }
        
        <Modal.Body className="greyFill whiteText centre-text">
        
          <Modal.Title className="pinkText centre-text spaceBottom">
            <h3>{text.home.land.title}</h3>
          </Modal.Title>
          
          <p>[icons: fist, rainbow flag]</p>
          <p className="width-80 spaceTop spaceBottom">{text.home.land.text}</p>
          <Button href={text.home.land.button.link} target="_blank" className="spaceTop spaceBottom darkText blueFill pinkShadow btn">
            {text.home.land.button.text}
          </Button>   
                   
        </Modal.Body>
        
      </Modal>
    </div>
  );
}
