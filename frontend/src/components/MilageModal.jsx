import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import { RiEdit2Fill } from 'react-icons/ri';


function MilageModal({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className='text-end confirmation'><RiEdit2Fill /></div>
      <Offcanvas show={show} onHide={handleClose} {...props} className='p-4'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Milage Update</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <label htmlFor="Milage">Milage</label>
            <input type="text" id='Milage' className='form-control'/>

            <label className='mt-4' htmlFor="Milagesystem">Milage In system</label>
            <input type="text" id='Milagesystem' className='form-control'/>

            <label className='mt-4' htmlFor="Update">Last Update On</label>
            <input type="date" id='Update' className='form-control'/>

            <label className='mt-4' htmlFor="Difference">Difference</label>
            <input type="text" id='Difference' className='form-control'/>

            <div className="buttons text-end mt-4">
              <button className='btn mx-2'>Cancel</button>
              <button className='btn btn-dark'>Save</button>
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
        <MilageModal key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default MilageModal ;
