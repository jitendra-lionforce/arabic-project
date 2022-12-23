import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './BottomModal.css'
import { AiOutlineDownload } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';


function ServiceHistoryModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('GAC_Service_18th June 2022.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'GAC_Service_18th June 2022.pdf';
        alink.click();
      })
    })
  }
  return (
    <>
      <Button variant="outline-dark py-0 px-4 mt-2" onClick={handleShow}>
      View / Edit
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Service History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="historyheading">
            last 6 Service History
          </div>
          <hr />

          <center className="d-flex justify-content-between p-2 pdf-downloader-div">
            <div>GAC_Service_18th June 2022.pdf</div>
            <div className='d-flex align-items-center'>
              <BsEye className='h3 pdf'/>
              <div className='mx-3' onClick={onButtonClick}>
                <AiOutlineDownload className='h3 pdf'/>
              </div>
            </div>
          </center>
          <center className="mt-3 d-flex justify-content-between p-2 pdf-downloader-div">
            <div>GAC_Service_18th June 2022.pdf</div>
            <div className='d-flex align-items-center'>
              <BsEye className='h3 pdf'/>
              <div className='mx-3' onClick={onButtonClick}>
                <AiOutlineDownload className='h3 pdf'/>
              </div>
            </div>
          </center>
          <center className="mt-3 d-flex justify-content-between p-2 pdf-downloader-div">
            <div>GAC_Service_18th June 2022.pdf</div>
            <div className='d-flex align-items-center'>
              <BsEye className='h3 pdf'/>
              <div className='mx-3' onClick={onButtonClick}>
                <AiOutlineDownload className='h3 pdf'/>
              </div>
            </div>
          </center>
          <center className="mt-3 d-flex justify-content-between p-2 pdf-downloader-div">
            <div>GAC_Service_18th June 2022.pdf</div>
            <div className='d-flex align-items-center'>
              <BsEye className='h3 pdf'/>
              <div className='mx-3' onClick={onButtonClick}>
                <AiOutlineDownload className='h3 pdf'/>
              </div>
            </div>
          </center>
          <center className="mt-3 d-flex justify-content-between p-2 pdf-downloader-div">
            <div>GAC_Service_18th June 2022.pdf</div>
            <div className='d-flex align-items-center'>
              <BsEye className='h3 pdf'/>
              <div className='mx-3' onClick={onButtonClick}>
                <AiOutlineDownload className='h3 pdf'/>
              </div>
            </div>
          </center>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-dark" onClick={handleClose}>
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

export default ServiceHistoryModel;