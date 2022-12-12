import React, { useRef } from 'react'
import Header from '../Header'
import carFront from '../assets/images/car_front.png'
import carSide from '../assets/images/car-side.png'
import carBack from '../assets/images/carBack.png'
import carTop from '../assets/images/car_top.png'
import Dropdown from 'react-bootstrap/Dropdown';
import './VehicleInspection.css'
// import { FaUserAlt } from 'react-icons/fa';
// import { RiEdit2Fill } from 'react-icons/ri';
// import { AiFillCar } from 'react-icons/ai';
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


const VehicleInspection = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const imageRef = useRef();
    const onBack = () => {
        // imageRef.current.src = carBack
    }
    const handleOnClick = index => {
        setActiveIndex(index); // remove the curly braces
        if (index === 0) {
            imageRef.current.src = carFront
        }
        else if (index === 1) {
            imageRef.current.src = carBack
        }
        else if (index === 2) {
            imageRef.current.src = carTop
        }
        else if (index === 3 || 4) {
            imageRef.current.src = carSide
        }
        else if (index === 5) {
            imageRef.current.src = carSide
        }
    };
    const boxs = ['F', 'B', 'T', 'S', 'L', 'R'];
    const box = boxs.map((el, index) => {
        return (
            <button
                style={{ margin: 'auto' }}
                key={index}
                onClick={() => handleOnClick(index)} // pass the index
                className={activeIndex === index ? "active view-btn mt-2" : "view-btn mt-2"}
            >
                {el}
            </button>
        );
    });


    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="heading ms-md-5">
                    Vehicle Inspection
                </div>
                <div className="row align-items-center">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2 position-relative">
                                <div className="align-items-center justify-content-between position-absolute w-100" style={{ top: '40%' }}>
                                    <div>
                                        <div className="small-heading text-center view-buttons">
                                            Car View
                                            {box}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-10 text-center">
                                <div className=' mt-3'>
                                    {/* <button className='view-btn active' >F</button>
                                    <button className='view-btn' ref={activeRef} onClick={() => onBack()}>B</button>
                                    <button className='view-btn'>T</button>
                                    <button className='view-btn'>S</button> */}
                                </div>
                                <img className='mt-5 car-img' src={carFront} alt="" ref={imageRef} height={460} />
                            </div>

                        </div>
                    </div>
                    <div className="col-2">

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
                            <div className='mt-2'>1. RTS091234</div>
                            <div className='mt-2'>2. RTS091234</div>
                            <div className='mt-2'>3. RTS091234</div>
                        </div>
                        {/* <button className='mt-3 btn btn-outline-dark px-4 py-0'>View</button> */}
                        <CustomerFeedbackModel />
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
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="row user-card">
                                        <div className='col-3 border border-dark rounded inspect-icon-position'>
                                            <div className='inspect-edit-btn'>
                                                <CustomerDetailsModal />
                                            </div> <br />
                                            <div className="py-2 user-icon text-center align-items-center">
                                                <img className='inspect-icon' src={UserIcon} />
                                            </div>
                                        </div>
                                        <div className="col-9 User-details">
                                            <div className="Name"><small> Name:  Mohammed Arshad</small></div>
                                            <div className="phone mt-1"><small> Phone:  +63 8789875766</small></div>
                                            <div className="email mt-1"><small> Email:  arshad@gmail.com</small></div>
                                            <div className="VIN mt-1"><small> VIN:  VIN 3931 W 3R1W</small></div>
                                        </div>
                                    </div>
                                    <small className='ms-2'>Customer</small>

                                </div>
                                <div className="col-6">
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
                        <div className="col-6">
                            <div className="row justify-content-center">
                                <div className="col-2 ">
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
                                <div className="col-2 ">
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
                                <div className="col-1">
                                    {/* Rangeslider */}
                                </div>
                                <div className="col-2 ">
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
                                <div className="col-2 ">
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
                                    <div className='text-center'><small className=''>Inspection Details</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VehicleInspection