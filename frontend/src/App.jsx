import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Navigate, Outlet } from 'react-router-dom'
import CarSelection from './components/CarSelection';
import Login from './components/Login';
import Products from './Products';
import { useState } from 'react';
import Protected from './Protected';
import Header from './Header';
import Banner from './components/Banner';
import OperatorLogin from './components/OperatorLogin'
import MobileLogin from './components/MobileLogin'
import VehicleInspection from './components/VehicleInspection';
// import Addmoreinput from './components/Addmoreinput.jsx';

// const PrivateRoutes = ({ auth }) => {
//   // let auth = { 'token': false }
//   return (
//     auth ? <Outlet /> : <Navigate to='/login' />
//   )
// }
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <Addmoreinput/> */}
        <Routes>
          <Route path='/' element={<Protected Component={CarSelection} />} />
          <Route path='/products' element={<Protected Component={Products} />} />
          <Route path='/inspection' element={<Protected Component={VehicleInspection} />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/oplogin' element={<OperatorLogin  />} />
          <Route path='/mobilelogin' element={<MobileLogin  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App