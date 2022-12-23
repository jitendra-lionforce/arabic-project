import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ServiveMilestoneModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [oilchange, setOilchange] = useState(0)
  const [engineCheck, setEngineCheck] = useState(0)
  const [breakShoe, setBreakShoek] = useState(0)
  const [rotateTyres, setRotateTyres] = useState(0)
  const [Carburetor, setCarburetor] = useState(0)
  const [battery, setBattery] = useState(0)
  const [carbody, setCarbody] = useState(0)
  const [airFilter, setAirFilter] = useState(0)
  const [waxVehicle, setWaxVehicle] = useState(0)
  const [transmissonFluid, setTransmissonFluid] = useState(0)
  const [sparksPlug, setSparksPlug] = useState(0)

  const boxs = ['Yes', 'No'];
  return (
    <>
      <Button onClick={handleShow} className="inspection-view-btn me-2 py-0 px-4 mt-3">
        View / Edit
      </Button>
      <Offcanvas className="py-2" show={show} onHide={handleClose}>
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
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setOilchange(index)}
                        className={oilchange === index ?
                          "active-mil-service-option-yes" :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Engine Check
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setEngineCheck(index)}
                        className={engineCheck === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Break Shoe Check
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setBreakShoek(index)}
                        className={breakShoe === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Rotate Tyres
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setRotateTyres(index)}
                        className={rotateTyres === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Carburetor
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setCarburetor(index)}
                        className={Carburetor === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Battery
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setBattery(index)}
                        className={battery === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>

            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Car Body
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setCarbody(index)}
                        className={carbody === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Air Filter
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setAirFilter(index)}
                        className={airFilter === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Wax Vehicle
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setWaxVehicle(index)}
                        className={waxVehicle === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Transmisson  Fluid
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setTransmissonFluid(index)}
                        className={transmissonFluid === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-col'>
                <div className='mil-service-option'>
                  Sparks  Plug
                </div>
                {
                  boxs.map((el, index) => {
                    return (
                      <button key={index} onClick={() => setSparksPlug(index)}
                        className={sparksPlug === index ?
                          "active-mil-service-option-yes " :
                          "mil-service-option-no"}>
                        {el}
                      </button>
                    )
                  })
                }
              </Col>
            </Row>
            <Row>
              <Col className='mil-service-btn-col'>
                <Button onClick={() => setShow(false)} className='mil-service-cancel-btn mx-2' variant="light">Cancel</Button>
                <Button onClick={handleClose} className='mil-service-update-btn' variant="dark">Update</Button>
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
