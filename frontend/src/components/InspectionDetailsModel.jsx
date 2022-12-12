import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import { RiEdit2Fill } from 'react-icons/ri';


function InspectionDetailsModel({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className='text-end confirmation'><RiEdit2Fill /></div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function RightModel() {
  return (
    <>
      {['View'].map((placement, idx) => (
        <InspectionDetailsModel key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default InspectionDetailsModel ;
