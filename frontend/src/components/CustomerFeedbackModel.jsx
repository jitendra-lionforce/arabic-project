import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './BottomModal.css'
import Form from 'react-bootstrap/Form';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import Remove from '../assets/images/Remove.png'
import Done from '../assets/images/done.png'


function CustomerFeedbackModel({ inputList, setInputList, setInputval, inputval }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [inputList, setInputList] = useState([{ inputvalue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", selectVal: "RTS456" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        // setInputList(list);
        let arr = secondshow
        arr[index] = false
        setSecondshow([...arr])
        setInputval([...inputval, list[index].selectVal])
    };

    const clearVal = (index) => {
        const list = [...inputList];
        list[index].inputvalue = ""
        list[index].selectVal = ""
        setInputList(list)
    }

    useEffect(() => {
    }, [inputList])

    const handleAddClick = () => {
        // console.log(inputList)
        setInputList([...inputList, { inputvalue: "", selectVal: "" }]);
        let arr = secondshow
        arr.push(true)
        setSecondshow(arr)
        // setDisable(false)
    };

    const handleRemoveClick = (index) => {
        const values = [...inputList];
        values.splice(index, 1);
        setInputList(values);
    };

    

    const [secondshow, setSecondshow] = useState([true])

    const editClick = (index) => {
        let arr = secondshow
        arr[index] = false
        setSecondshow([...arr])
        // setDisable(false)
        // setSecondshow((currentArr) => currentArr[index] = false)

    }

    const showpreBtn = (index) => {
        let arr = secondshow
        arr[index] = true
        setSecondshow([...arr])

    }

    useEffect(() => {
        // console.log("first", secondshow)

    }, [secondshow[0]])


    const handlesubmit = () => {
        setShow(false)
        console.log(inputval);
    }

    return (
        <>
            <Button variant="outline-dark py-0 px-4 mt-2" onClick={handleShow}>
                View / Edit
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>Customer Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <div className="col-md-8">
                            <h6><b>Customer Description</b></h6>
                        </div>
                        <div className="col-md-2 text-center">
                            <h6><b>RTS Code</b></h6>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    {inputList.map((x, i) => {
                        return (
                            <div key={i} className='row mt-2 pdf-downloader-div p-2'>
                                <div className="col-md-8">
                                    <input
                                        // disabled={secondshow[i] ? 'disabled' : ''}
                                        name='inputvalue' onChange={(e) =>
                                            [handleInputChange(e, i)]} value={[x.inputvalue]}
                                        type="text" className='w-100 form-control border-0' />
                                </div>
                                <div className="col-md-2">
                                    <Form.Select
                                        // disabled={secondshow[i] ? 'disabled' : ''}
                                        name="selectVal" value={x.selectVal} onChange={(e) =>
                                            handleInputChange(e, i)} className='border-0'>
                                        <option>RTS421</option>
                                        <option>RTS241</option>
                                        <option>RTS456</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-2 text-center">
                                    {secondshow[i] ? <span>
                                        <span onClick={() => editClick(i)} className='h3 remove-done-Mark'>
                                            <RiEdit2Fill />
                                        </span>
                                        <span className='h3 remove-done-Mark mx-3'
                                            onClick={() => handleRemoveClick(i)}>
                                            <RiDeleteBinLine />
                                        </span>
                                    </span> : <>
                                        <span className='h3 remove-done-Mark'>
                                            <img name="img" className='img-fluid' src={Done}
                                                onClick={() => [showpreBtn(i)]}
                                            />
                                        </span>
                                        <span className='mx-3 h3 remove-done-Mark'>
                                            <img onClick={() => clearVal(i)} src={Remove} className='img-fluid' />
                                        </span>
                                    </>}

                                </div>
                            </div>
                        );
                    })}

                    <div className='footer mt-3'>
                        <Button variant="dark" onClick={handleAddClick}>
                            Add
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handlesubmit}>
                        Save
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomerFeedbackModel;