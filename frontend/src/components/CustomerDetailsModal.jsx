import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import { RiEdit2Fill } from 'react-icons/ri';


function CustomerDetailsModal({custname, setCustname, phone, setPhone, email, setEmail, vin, setVin }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
      setShow(false)
  };
  const handleShow = () => setShow(true);



  return (
    <>
      <div onClick={handleShow} className='text-end confirmation'><RiEdit2Fill /></div>
      <Offcanvas show={show} onHide={() => setShow(false)} className='p-4 Milagemodal'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Customer Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <label htmlFor="Name">Name</label>
            <input value={custname} onChange={(e) => setCustname(e.target.value)} type="text" id='Name' className='form-control' />
            
            <label className='mt-4' htmlFor="Phone">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="Number" id='Phone' className='form-control' />
            
            <label className='mt-4' htmlFor="Email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" id='Email' className='form-control' />
           
            <label className='mt-4' htmlFor="VIN">VIN</label>
            <input disabled={true} value={vin} onChange={(e) => setVin(e.target.value)} type="text" id='VIN' className='form-control' />
            <div className="buttons text-end mt-4">
              <button onClick={() => setShow(false)} className='btn mx-2'>Cancel</button>
              <button onClick={handleClose} className='btn btn-dark'>Update</button>
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
