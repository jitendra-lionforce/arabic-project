import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ServiveMilestoneModal({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="inspection-view-btn me-2 py-0 px-4 mt-3">
        View
      </Button>
      <Offcanvas className="py-2" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className='service-mil-modal-km'>100,000 KM Service</span> <br />
            <span className='service-mil-modal-title'>Services</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Oil Change
                </div>
                <div className='mil-service-option-yes'>
                  Yes
                </div>
                <div className='mil-service-option-no'>
                  No
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-btn-col'>
                <Button className='mil-service-cancel-btn mx-2' variant="light">Cancel</Button>
                <Button className='mil-service-update-btn' variant="dark">Update</Button>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function RightModel() {
  return (
    <>
      {['View'].map((placement, idx) => (
        <ServiveMilestoneModal key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default ServiveMilestoneModal;
