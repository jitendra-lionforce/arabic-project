import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './BottomModal.css'
import Form from 'react-bootstrap/Form';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaCamera } from 'react-icons/fa';


function CustomerFeedbackModel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark py-0 px-4 mt-2" onClick={handleShow}>
                View
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Customer Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                    
                        <div className="col-8">
                            <b>Customer Descriptions</b>
                        </div>
                        <div className="col-1 text-center">
                            <b>Snap</b>
                        </div>
                        <div className="col-2">
                            <b>RTS Code </b>
                        </div>
                        <div className="col-1">
                            <span className='h3'>

                            </span>
                            <span className='h3 mx-3'>

                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>                    
                        <div className="col-8">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>
                        <div className="col-1 text-center">
                            <FaCamera className='h3' />
                        </div>
                        <div className="col-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-1">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>
                            <span className='h3 mx-3'>
                                <RiDeleteBinLine />
                            </span>
                        </div>
                    </div>

                    <div className='row mt-2'>                    
                        <div className="col-8">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>
                        <div className="col-1 text-center">
                            <FaCamera className='h3' />
                        </div>
                        <div className="col-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-1">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>
                            <span className='h3 mx-3'>
                                <RiDeleteBinLine />
                            </span>
                        </div>
                    </div>

                    <div className='row mt-2'>                    
                        <div className="col-8">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>
                        <div className="col-1 text-center">
                            <FaCamera className='h3' />
                        </div>
                        <div className="col-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-1">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>
                            <span className='h3 mx-3'>
                                <RiDeleteBinLine />
                            </span>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomerFeedbackModel;