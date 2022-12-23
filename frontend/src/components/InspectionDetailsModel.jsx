import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './VehicleInspection.css'
import { RiEdit2Fill } from 'react-icons/ri';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function InspectionDetailsModel({ name, ...props }) {
  const [internaldiv, setInternaldiv] = useState(true)
  const [externaldiv, setExternaldiv] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [serviceBook, setServiceBook] = useState(0)
  const [radio, setRadio] = useState(0)
  const [ac, setAc] = useState(0)
  const [spareWheel, setSpareWheel] = useState(0)
  const [cassette, setCassette] = useState(0)
  const [cigLighter, setCigLighter] = useState(0)
  const [headRest, setHeadRest] = useState(0)
  const [jack, setJack] = useState(0)
  const [turnSignals, setTurnSignals] = useState(0)
  const [insideMirror, setInsideMirror] = useState(0)
  const [tools, setTools] = useState(0)
  const [fireExtinguisher, setFireExtinguisher] = useState(0)
  const [bluetooth, setBluetooth] = useState(0)
  const [floorMaths, setFloorMaths] = useState(0)
  const [windowFL, setWindowFL] = useState(0)
  const [windowFR, setWindowFR] = useState(0)
  const [windowRL, setWindowRL] = useState(0)
  const [windowRR, setWindowRR] = useState(0)
  const [headlights, setHeadlights] = useState(0)
  const [frontparklights, setFrontparklights] = useState(0)
  const [rearparkLights, setRearparkLights] = useState(0)
  const [mirrorRH, setMirrorRH] = useState(0)
  const [wheelCap, setWheelCap] = useState(0)
  const [antenna, setAntenna] = useState(0)
  const [mirrorLH, setMirrorLH] = useState(0)
  const [style, setStyle] = useState(true);

  const boxs = ['X', 'N', 'D'];

//   const styleIs = {{
//     bigdiv: {

//     }
//   }
// }

return (
  <>
    <div onClick={handleShow} className='text-end confirmation'><RiEdit2Fill /></div>
    <Offcanvas show={show} onHide={handleClose} {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Inspection Details</Offcanvas.Title>
      </Offcanvas.Header>
      <span className='ms-3'>
        <button onClick={() => [setInternaldiv(true), setExternaldiv(false), setStyle(true)]}
          className={style ? 'iDetailbtn btn mx-2 fw-bold' : 'iDetailbtn btn mx-2'} style={{ borderBottom: style? '1px solid blue':''}}>Internal</button>
        <button onClick={() => [setExternaldiv(true), setInternaldiv(false), setStyle(false)]}
          className={style ? 'iDetailbtn btn' : 'iDetailbtn btn fw-bold'} style={{ borderBottom: style? '' : '1px solid blue'}}>Enternal</button>
      </span>
      <Offcanvas.Body>
        <Container>
          {internaldiv ?
            <>
              <Row>
                <Col className='mil-service-col'>
                  <div className='mil-service-option'>
                    Service Book
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setServiceBook(index)}
                          className={serviceBook === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Radio
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setRadio(index)}
                          className={radio === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    A/c
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setAc(index)}
                          className={ac === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Spare Wheel
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setSpareWheel(index)}
                          className={spareWheel === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Cassette
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setCassette(index)}
                          className={cassette === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Cig Lighter
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setCigLighter(index)}
                          className={cigLighter === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Head Rest
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setHeadRest(index)}
                          className={headRest === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Jack/Tools
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setJack(index)}
                          className={jack === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Turn Signals
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setTurnSignals(index)}
                          className={turnSignals === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Inside Mirror
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setInsideMirror(index)}
                          className={insideMirror === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Tools
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setTools(index)}
                          className={tools === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Fire Extinguisher
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setFireExtinguisher(index)}
                          className={fireExtinguisher === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Bluetooth
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setBluetooth(index)}
                          className={bluetooth === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Floor Maths
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setFloorMaths(index)}
                          className={floorMaths === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
                          {el}
                        </button>
                      )
                    })
                  }
                </Col>
              </Row>
            </>
            : ''}



          {externaldiv ?
            <>
              <Row>
                <Col className='mil-service-col'>
                  <div className='mil-service-option'>
                    Window F/L
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setWindowFL(index)}
                          className={windowFL === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Window F/R
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setWindowFR(index)}
                          className={windowFR === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Window R/L
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setWindowRL(index)}
                          className={windowRL === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Window R/R
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setWindowRR(index)}
                          className={windowRR === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Head Lights
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setHeadlights(index)}
                          className={headlights === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Front Park Lights
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setFrontparklights(index)}
                          className={frontparklights === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Rear Park Lights
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setRearparkLights(index)}
                          className={rearparkLights === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Mirrors RH
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setMirrorRH(index)}
                          className={mirrorRH === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Wheel Cap
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setWheelCap(index)}
                          className={wheelCap === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Antenna
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setAntenna(index)}
                          className={antenna === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
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
                    Mirrors LH
                  </div>
                  {
                    boxs.map((el, index) => {
                      return (
                        <button key={index} onClick={() => setMirrorLH(index)}
                          className={mirrorLH === index ?
                            "mx-1 active-inspection-details-option-yes " :
                            "mx-1 mil-service-option-no"}>
                          {el}
                        </button>
                      )
                    })
                  }
                </Col>
              </Row>
            </>
            : ''}



          <Row>
            <Col className='mil-service-btn-col'>
              <Button onClick={()=> setShow(false)} className='mil-service-cancel-btn mx-2' variant="light">Cancel</Button>
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
        <InspectionDetailsModel key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default InspectionDetailsModel;
