import React from "react";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarFront from "../assets/images/car_front.png";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CarSelection = () => {
  const navigate = useNavigate();

  const USERS = [
    { id: 1, platename: "3931 W 2RIW", status: 'active' },
    { id: 2, platename: "32 W 2RIW", status: '5 days more' },
    { id: 3, platename: "31 W 2RIW", status: '20 days more' },
    { id: 4, platename: "4 W 2RIW", status: 'none' },
  ];

  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.platename.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  return (
    <>
      <Header />
      <div>
        <div className="car-selection-cont">
          <Row className="car-selection-row g-0">
            <Col sm={12} md={12} xl={6} lg={6} className="car-selection-col">
              <Row>
                <Col className="cs-img-wrap">
                  <img src={CarFront} alt="" />
                </Col>
              </Row>
              <Row className="car-detail-row">
                <Col sm={12} md={6} className="car-detail-col1">
                  <span>Name : Mohammed Arshad</span>
                  <br />
                  <span>Phone : +63 87898 75766</span>
                  <br />
                  <span>Email : arshad@gmail.com</span>
                  <br />
                  <span>VIN : 3931 W 3RIW</span>
                </Col>
                <Col sm={12} md={6} className="car-detail-col2">
                  <span>Make : 2020</span>
                  <br />
                  <span>Model : MT2020</span>
                  <br />
                  <span>Email : 20 Dec 2022</span>
                  <br />
                  <span>Milage : 5000km</span>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} xl={6} lg={6} className="car-select-col">
              <Row>
                <Col className="car-search-col">
                  <input
                    className="form-control"
                    placeholder="Search"
                    type="search"
                    value={name}
                    onChange={filter}
                  />

                  <div className="user-list">
                    <Row>
                      {foundUsers && foundUsers.length > 0 ? (
                        foundUsers.map((user) => (
                          // <li key={user.id} className="user">
                          //   {/* <span className="user-id">{user.id}</span> */}
                          //   <span className="user-name">{user.platename}</span>
                          // </li>
                          <Col lg={4} xl={4} md={6} className={user.status === 'active' ? "car-cards-col-green" : (user.status !== 'none' ? 'car-cards-col-red' : 'car-cards-col')}>
                            <Row>
                              <Col className="card-col">
                                <Link to='/inspection'>
                                
                                <Card >
                                  <Card.Body>
                                    <span className="days-more-span">{user.status}</span>
                                    <span className="appointment-span">
                                      Book Appointment
                                    </span>
                                    <Card.Img src={CarFront} /> <br />
                                    <span>{user.platename}</span>
                                  </Card.Body>
                                </Card>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        ))
                      ) : (
                        <h1>No results found!</h1>
                      )}
                    </Row>

                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col className="car-cards-col-green">
                  <Row>
                    <Col className="card-col">
                      <Card>
                        <Card.Body>
                          <Card.Img src={CarFront} /> <br />
                          <span>3931 W 3RIW</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col className="car-cards-col-red">
                  <Row>
                    <Col>
                      <Card className="card-col">
                        <Card.Body>
                          <span className="days-more-span">5 Days more</span>
                          <span className="appointment-span">
                            Book Appointment
                          </span>
                          <Card.Img src={CarFront} /> <br />
                          <span>3931 W 3RIW</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col className="car-cards-col-red">
                  <Row>
                    <Col className="card-col">
                      <Card>
                        <Card.Body>
                          <span className="appointment-span">
                            Book Appointment
                          </span>
                          <span className="days-more-span">5 Days more</span>
                          <Card.Img src={CarFront} /> <br />
                          <span>3931 W 3RIW</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="car-cards-col">
                  <Row>
                    <Col className="card-col">
                      <Card>
                        <Card.Body>
                          <Card.Img src={CarFront} /> <br />
                          <span>3931 W 3RIW</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col className="car-cards-col">
                  <Row>
                    <Col>
                      <Card className="card-col">
                        <Card.Body>
                          <Card.Img src={CarFront} /> <br />
                          <span>3931 W 3RIW</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col className="car-cards-col">
                  <Row>
                    <Col className="card-col">
                      <Card>
                        <Card.Body>
                          <Card.Img src={CarFront} /> <br />
                          <span>3931 W 3RIW</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CarSelection;
