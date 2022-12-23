import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import carFront from '../assets/images/car_front.png'
import carSide from '../assets/images/car-side.png'
import carBack from '../assets/images/carBack.png'
import carTop from '../assets/images/car_top.png'
import Dropdown from 'react-bootstrap/Dropdown';
import './VehicleInspection.css'
import ServiveMilestoneModal from './ServiveMilestoneModal';
import CustomerFeedbackModel from './CustomerFeedbackModel';
import InspectionModel from './InspectionModel';
import ServiceHistoryModel from './ServiceHistoryModel';
import UserIcon from '../assets/images/usericon.svg'
import CarIcon from '../assets/images/caricon.svg'
import MilageIcon from '../assets/images/milageicon.svg'
import FuelIcon from '../assets/images/fuelicon.svg'
import InspectIcon from '../assets/images/inspecticon.svg'
import ConfirmIcon from '../assets/images/informicon.svg'
import CustomerConfirmationModal from './CustomerConfirmationModal';
import CustomerDetailsModal from './CustomerDetailsModal';
import MilageModal from './MilageModal';
import InspectionDetailsModel from './InspectionDetailsModel';
import ReactSlider from "react-slider";
import CarIssuePopup from './CarIssuePopup'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
// import Rsuit from './rangeslider/Rsuit'

const VehicleInspection = () => {
    // const [activeIndex, setActiveIndex] = React.useState(0);
    const [hidebtn, setHidebtn] = useState(false)

    const [inputval, setInputval] = useState([])
    const [inputList, setInputList] = useState([{ inputvalue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", selectVal: "" }]);
    
    const [custname, setCustname] = useState(localStorage.getItem('Username'))
    const [phone, setPhone] = useState(localStorage.getItem('Phone-Number'))
    const [email, setEmail] = useState('arshad@gmail.com')
    const [vin, setVin] = useState("3931 W 3R1W")

    const imageRef = useRef();
    // const onBack = () => {
    //     // imageRef.current.src = carBack
    // }
    // const handleOnClick = index => {
    //     setActiveIndex(index); // remove the curly braces
    //     if (index === 0) {
    //         imageRef.current.src = carFront
    //     }
    //     else if (index === 1) {
    //         imageRef.current.src = carBack
    //     }
    //     else if (index === 2) {
    //         imageRef.current.src = carTop
    //     }
    //     else if (index === 3 || 4) {
    //         imageRef.current.src = carSide
    //     }
    //     else if (index === 5) {
    //         imageRef.current.src = carSide
    //     }
    // };
    // const boxs = ['F', 'B', 'T', 'S', 'L', 'R'];


    // const box = boxs.map((el, index) => {
    //     return (
    //         <button
    //             style={{ margin: 'auto' }}
    //             key={index}
    //             onClick={() => handleOnClick(index)} // pass the index
    //             className={activeIndex === index ? "active rounded-4 mt-2" : "rounded-4 mt-2"}
    //         >
    //             {el}
    //         </button>
    //     );
    // });

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = () => {
        setVisibility(false);
    };

    const showPopup = (index) => {
        if (index === 3 || 4 || 5) {
            setVisibility(true);
        }
    }
    const ImgOne = () => { imageRef.current.src = carFront }
    const ImgTwo = () => { imageRef.current.src = carBack }
    const ImgThree = () => { imageRef.current.src = carTop }
    const ImgFour = () => {
        setHidebtn(true)
        imageRef.current.src = carSide
    }
    const ImgFive = () => { imageRef.current.src = carSide }
    const ImgSix = () => { imageRef.current.src = carSide }
    

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="heading ms-md-5">
                    Vehicle Inspection
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10 col-md-12">
                        <div className="row">
                            <div className="col-2 d-flex m-auto">
                                {/* <div className="">
                                    <div> */}
                                {/* <div className="small-heading text-center view-buttons">
                                            Car View
                                            {box}
                                        </div> */}
                                <Tab.Container defaultActiveKey="first">
                                    <Nav variant="dark" className='CarsPics w-100 text-center d-grid'>
                                        <span>
                                            <Nav.Link eventKey="first" onClick={ImgOne}>F</Nav.Link>
                                        </span>
                                        <span>
                                            <Nav.Link className='mt-2' eventKey="second" onClick={ImgTwo}>B</Nav.Link>
                                        </span>
                                        <span>
                                            <Nav.Link className='mt-2' eventKey="three" onClick={ImgThree}>T</Nav.Link>
                                        </span>
                                        <div className='mt-2'>
                                            {hidebtn ? <span>
                                                <Nav.Link className='mx-2' eventKey="Four" onClick={ImgFive} id='5'>L</Nav.Link>
                                            </span> : ""}
                                            <span>
                                                <Nav.Link eventKey="five" onClick={ImgFour}>S</Nav.Link>
                                            </span>
                                            {hidebtn ? <span>
                                                <Nav.Link className='mx-2' eventKey="six" onClick={ImgSix}>R</Nav.Link>
                                            </span> : ""}
                                        </div>
                                    </Nav>
                                </Tab.Container>
                                {/* </div>
                                </div> */}
                            </div>
                            <div className="col-10 text-center">
                                <div className=' mt-3'>
                                    {/* <button className='rounded-4 active' >F</button>
                                    <button className='rounded-4' ref={activeRef} onClick={() => onBack()}>B</button>
                                    <button className='rounded-4'>T</button>
                                    <button className='rounded-4'>S</button> */}
                                </div>
                                <img onClick={showPopup} className='mt-5 car-img' src={carFront} alt="CarImage" ref={imageRef} height={460} />
                                <CarIssuePopup
                                    onClose={popupCloseHandler}
                                    show={visibility}
                                    title="Hello"
                                >
                                </CarIssuePopup >
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                        <small>Service Milestone</small>
                        <Dropdown className='service-dropdown mt-1'>
                            <Dropdown.Toggle id="dropdown-basic p-3">
                                10,000 km
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">10,000 Km</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">20,000 Km</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">30,000 Km</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">40,000 Km</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <ServiveMilestoneModal />
                        <hr />
                        <div className="customer-feedback">
                            <small>Customer Feedback</small> <br />
                            <ol>
                                {inputval.map((item, index) => {
                                    return <li key={index} className='mt-2'>{item}</li>
                                })}
                            </ol>
                        </div>
                        {/* <button className='mt-3 btn btn-outline-dark px-4 py-0'>View</button> */}
                        <CustomerFeedbackModel inputList={inputList} setInputList={setInputList} inputval={inputval} setInputval={setInputval} />
                        <hr />
                        <div className="observation">
                            <small>Inspection Observation</small> <br />
                            <div className='mt-2'>1. Window R/L Dent</div>
                            <div className='mt-2'>2. Mirror RH Scratches</div>
                        </div>
                        {/* <button className='mt-3 btn btn-outline-dark px-4 py-0'>View/Edit</button> */}
                        <InspectionModel />
                        <hr />
                        <div className='Service-History'>
                            <small>Service History</small> <br />
                            {/* <button className='mt-3 btn btn-outline-dark px-4 py-0'>View</button> */}
                            <ServiceHistoryModel />
                        </div>

                    </div>
                </div>
                <div className='ms-md-5'>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-md-6 col-lg-12 col-xl-6 col-sm-12">
                                    <div className="row user-card ms-xl-1">
                                        <div className='col-3 border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                <CustomerDetailsModal custname={custname} setCustname={setCustname}
                                                    phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} vin={vin} setVin={setVin}/>
                                            </div> <br />
                                            <div className="py-2 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={UserIcon} />
                                            </div>
                                        </div>
                                        <div className="col-9 User-details">
                                            <div className="Name"><small> Name: {custname}</small></div>
                                            <div className="phone mt-1"><small> Phone: {phone}</small></div>
                                            <div className="email mt-1"><small> Email:  {email}</small></div>
                                            <div className="VIN mt-1"><small> VIN:  {vin}</small></div>
                                        </div>
                                    </div>
                                    <small className='ms-4'>Customer</small>

                                </div>
                                <div className="col-md-6 col-lg-12 col-xl-6 col-sm-12">
                                    <div className="row user-card">
                                        <div className='col-3 border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                {/* <CustomerDetailsModal /> */}
                                            </div> <br />
                                            <div className="py-2 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={CarIcon} />
                                            </div>
                                        </div>
                                        <div className="col-9 User-details">
                                            <div className="Name"><small> Make:  2020</small></div>
                                            <div className="phone mt-1"><small> Model:  MT2020</small></div>
                                            <div className="email mt-1"><small> Date:  20 Dec 2022</small></div>
                                            <div className="VIN mt-1"><small> Milage: 500Km</small></div>
                                        </div>
                                    </div>
                                    <small className='ms-4 ps-2'>Car</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-md-12">
                            <div className="row justify-content-xl-center">
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="user-card">
                                        <div className=' border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                <MilageModal />
                                            </div> <br />
                                            <div className="py-2 mb-4 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={MilageIcon} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'><small>Milage</small></div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="user-card">
                                        <div className=' border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                {/* <MilageModal /> */}
                                            </div> <br />
                                            <div className="py-2 mb-4 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={FuelIcon} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'><small>Fuel</small></div>
                                </div>
                                {/* <input type="range" width={100}/> */}
                                <div className="col-xl-1 col-lg-4 col-md-4 col-sm-6">
                                    {/* Rangeslider */}
                                    {/* <ReactSlider
                                        className="vertical-slider"
                                        thumbClassName="example-thumb"
                                        trackClassName="example-track"
                                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                        orientation="vertical"
                                    /> */}
                                   {/* <Rsuit/> */}
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="user-card">
                                        <div className=' border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                <InspectionDetailsModel />
                                            </div> <br />
                                            <div className="py-2 mb-4 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={InspectIcon} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'><small>Inspection Details</small></div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="user-card">
                                        <div className=' border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                <CustomerConfirmationModal />
                                            </div> <br />
                                            <div className="py-2 mb-4 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={ConfirmIcon} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'><small className=''>Customer Confirmation</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehicleInspection;