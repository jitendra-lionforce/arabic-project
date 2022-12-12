import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import { RiEdit2Fill } from 'react-icons/ri';


function CustomerDetailsModal({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className='text-end confirmation'><RiEdit2Fill /></div>
      <Offcanvas show={show} onHide={handleClose} {...props} className='p-4'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Customer Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <label htmlFor="Name">Name</label>
            <input type="text" id='Name'/>

            <label className='mt-4' htmlFor="Phone">Phone</label>
            <input type="Number" id='Phone'/>

            <label className='mt-4' htmlFor="Email">Email</label>
            <input type="Email" id='Email'/>

            <label className='mt-4' htmlFor="VIN">VIN</label>
            <input type="text" id='VIN'/>

            <div className="buttons text-end mt-4">
              <button className='btn mx-2'>Cancel</button>
              <button className='btn btn-dark'>Update</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function RightModel() {
  return (
    <>
      {['View'].map((placement, idx) => (
        <CustomerDetailsModal key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default CustomerDetailsModal;
