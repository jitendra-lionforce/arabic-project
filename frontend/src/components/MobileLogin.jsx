import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import carFront from '../assets/images/car_front.png'
import axios from 'axios'
import { Buffer } from "buffer"
import Banner from './Banner'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const OperatorLogin = ({ auth, setAuth }) => {
  const [username, setUsername] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true);
  }
  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault()
    localStorage.setItem('login', true)
    let login = localStorage.getItem('login')
    console.log(login);
    if (login) {
      navigate('/')
    }
  }
  useEffect(() => {
    let login = localStorage.getItem('login')

  })
  return (
    <>
      <Banner />
      <div className="container text-center">
        {/* <div>
          <img src={carFront} alt="" />
        </div> */}
        <form className='mt-5'>

          <div>

            <input className='p-4' type='text' placeholder='Vehicle or Mobile Number' username={username} onChange={(e) => setUsername(e.target.value)} />
            <button className='small-btn' onClick={submitForm}>Go</button>
          </div>
          <button className='btn cust-btn' onClick={(e) => handleShow(e)}>
            Customer with appointment
          </button>

          <Modal show={show} centered className='apt-modal'>
            <div className='p-4'>
              <div className='title'>Appointment Details</div>
            </div>
            <Modal.Body className='pt-0'>
              <input className='ps-4 w-100' type='text' placeholder='WIP Number' username={username} onChange={(e) => setUsername(e.target.value)} />

            </Modal.Body>
            <Modal.Footer className='border-0'>
              <button className='btn border-0' onClick={handleClose}>
                Cancel
              </button>
              <button className='primary-btn' variant="primary" onClick={handleClose}>
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    </>
  )
}

export default OperatorLogin