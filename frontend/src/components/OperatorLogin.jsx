import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import carFront from '../assets/images/car_front.png'
import axios from 'axios'
import { Buffer } from "buffer"
import Banner from './Banner'
const OperatorLogin = ({ auth, setAuth }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [dirState, setDirState] = useState('')

  const navigate = useNavigate()
  const asyncLogin = async () => {
    console.log(username);
    const encodedString = Buffer.from(password).toString('base64');


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(login)
      username: username,
      password: encodedString
    }
    const response = await axios.post('http://localhost:5000/api/v1/auth', requestOptions)
    console.log(response)
  }
  const submitForm = (e) => {
    e.preventDefault()
    asyncLogin()
    // setAuth(true)
    localStorage.setItem('login', true)
    let login = localStorage.getItem('login')
    console.log(login);
    if (login) {
      navigate('/mobilelogin')
    }
  }
  useEffect(() => {
    let login = localStorage.getItem('login')

  })
  const opHandleKeyPress = (e) => {
    setUsername(e.target.value)
    var arabic = /[\u0600-\u06FF]/;
    console.log(e.target.value);
    let result = arabic.test(e.target.value);
    console.log(result);
    if(result) {
      setDirState('rtl')
    } else {
      console.log("asjasj");
      setDirState('')
    }
  }
  return (
    <>
    <Banner/>
      <div className="container text-center">
        {/* <div>
          <img src={carFront} alt="" />
        </div> */}
        <form className='mt-5'>

          <div>

            <input className='p-4' type='text' placeholder='Operator Code' username={username} onChange={opHandleKeyPress} dir={dirState} />
          </div>
          <div className='mt-3'>

            <input className='p-4' type='password' placeholder='Password' password={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='mt-3'>
            <button className='primary-btn' onClick={submitForm}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default OperatorLogin