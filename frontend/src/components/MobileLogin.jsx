import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import carFront from '../assets/images/car_front.png'
import axios from 'axios'
import { Buffer } from "buffer"
import Banner from './Banner'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const OperatorLogin = ({ auth, setAuth }) => {
  const [wip, setWip] = useState('')
  const [phnum, setPhnum] = useState('')

  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault()
    localStorage.setItem('login', true)
    let login = localStorage.getItem('login')
    console.log(login);
    localStorage.setItem('WIP-Number', wip)
    localStorage.setItem('Phone-Number', phnum)

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

          <div className='LoginPage justify-content-center'>
            <Tabs
              defaultActiveKey="With Appointment"
              transition={false}
              id="noanim-tab-example"
              className="mb-3 w-50">
              <Tab className='w-50' eventKey="With Appointment" title="With Appointment">
                <div className='d-flex'>
                  <input className='p-3 form-control' type='text' placeholder='WIP Number' value={wip} onChange={(e) => setWip(e.target.value)} />
                  <button className='small-btn p-3' onClick={submitForm}>Go</button>
                </div>
              </Tab>
              <Tab className='w-50' eventKey="Without Appointment" title="Without Appointment">
                <div className='d-flex'>
                  <input className='p-3 form-control' type='text' placeholder='Vehicle or Mobile Number' value={phnum} onChange={(e) => setPhnum(e.target.value)} />
                  <button className='small-btn p-3' onClick={submitForm}>Go</button>
                </div>
              </Tab>
            </Tabs>

          </div>
        </form>
      </div>
    </>
  )
}

export default OperatorLogin