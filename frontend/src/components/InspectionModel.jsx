import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './BottomModal.css'
import Form from 'react-bootstrap/Form';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaCamera } from 'react-icons/fa';
import Remove from '../assets/images/Remove.png'
import Done from '../assets/images/done.png'


function InspectionModel() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [secondshow, setSecondshow] = useState([true])

  const [inputList, setInputList] = useState([{ inputvalueOne: "Lorem ipsum dolor sit amet", inputvalueTwo: "Lorem ipsum dolor sit amet", selectVal: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    let arr = secondshow
    arr[index] = false
    setSecondshow([...arr])
    console.log(secondshow);

  };
  const handleAddClick = () => {
    console.log(inputList)
    setInputList([...inputList, { inputvalueOne: "", inputvalueOne: "", selectVal: "" }]);
    let arr = secondshow
    arr.push(true)
    setSecondshow(arr)
  };

  const clearVal = (index) => {
    const list = [...inputList];
    list[index].inputvalueOne = ""
    list[index].inputvalueTwo = ""
    list[index].selectVal = ""
    setInputList(list)
  }

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
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
  return (
    <>
      <Button variant="outline-dark py-0 px-4 mt-2" onClick={handleShow}>
        View / Edit
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Inspection Observation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-md-2">
              <b>Heading</b>
            </div>
            <div className="col-md-5">
              <b>Descriptions</b>
            </div>
            <div className="col-md-1 text-center">
              <b>Snap</b>
            </div>
            <div className="col-md-2">
              <b>RTS Code </b>
            </div>
            <div className="col-md-2">
              <span className='h3'>

              </span>
              <span className='h3 mx-3'>

              </span>
            </div>
          </div>
          <hr />


          {
            inputList.map((x, i) => {
              return (
                <div key={i} className='row pdf-downloader-div p-2 mt-2'>
                  <div className="col-md-2">
                    <input name='inputvalueOne' onChange={(e) => handleInputChange(e, i)} value={x.inputvalueOne} type="text" className='form-control border-0' />
                  </div>
                  <div className="col-md-5">
                    <input name='inputvalueTwo' onChange={(e) => handleInputChange(e, i)} value={x.inputvalueTwo} type="text" className='w-100 form-control border-0' />
                  </div>
                  <div className="col-md-1 text-center">
                    <FaCamera className='h3' />
                  </div>
                  <div className="col-md-2">
                    <Form.Select name="selectVal" value={x.selectVal} onChange={(e) => handleInputChange(e, i)} className='border-0'>
                      <option>Select</option>
                      <option value="1">RTS421</option>
                      <option value="2">RTS241</option>
                      <option value="3">RTS456</option>
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
                    </span> :
                      <>
                        <span className='h3 remove-done-Mark'>
                          <img className='img-fluid' src={Done} alt="Done"
                            onClick={() => [showpreBtn(i)]} />
                        </span>
                        <span className='mx-3 h3 remove-done-Mark'>
                          <img onClick={() => clearVal(i)} src={Remove} alt="Remove" className='img-fluid' />
                        </span>
                      </>
                    }

                  </div>
                </div>
              );
            })
          }
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
          <Button variant="dark" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InspectionModel;