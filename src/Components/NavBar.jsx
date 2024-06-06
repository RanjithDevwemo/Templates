import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {
  Col,
  Row,
  Dropdown,
} from "react-bootstrap";
import "../Css/Navbar.css"
import Popup from './Popup';
import logo from "../assets/Images/responsive-logo-tagline.png"
// import Megamenu from './Megamenu';
import "../Css/Mega1.css"
import { Link } from 'react-router-dom';
function OffcanvasExample() {
  return (
    <div className='nav'>
      
      {[ 'lg'].map((expand) => (
 
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 nav-main">
          <div className="navbar">
          <Container fluid className='con'>
           
           
            <Navbar.Brand href="#"><img src={logo} alt="Logo image" title='Logo image' className='logo' /></Navbar.Brand>
           
            <div className="offcan"> <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /></div>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href=""><Link to="/" className='li'>Home</Link></Nav.Link>
                  <Nav.Link href="#action2"><Link to="/link" className='li'>Link</Link></Nav.Link>
                 
                  <NavDropdown
                // className="pr-2 py-2 align-text-top"
                title="MegaMenu"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="4" className="text-left">
                      <Dropdown.Header>Catering</Dropdown.Header>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Corporate
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Private
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"chalkboard-teacher"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Classes
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Barista 101
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            History of Coffee
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Intro to Cafe Snobbery
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Divider className="d-md-none" />
                    </Col>

                    <Col xs="12" md="4" className="text-left">
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Rentals
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Fireside Room
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Roasting Room
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"sun"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Seasonal
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Coldbrew Night
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link text-wrap" role="button">
                            Campfire Coffee Class
                          </a>
                        </span>
                      </Dropdown.Item>
                    </Col>
                    
                    <Col xs="12" md="4" className="text-left">
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Rentals
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Fireside Room
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Roasting Room
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"sun"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Seasonal
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link" role="button">
                            Coldbrew Night
                          </a>
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <span>
                          <a className="nav-link text-wrap" role="button">
                            Campfire Coffee Class
                          </a>
                        </span>
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              

                  {/* <Megamenu/> */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                  <Popup/>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          </div>
        </Navbar>
       
      ))}
    </div>
  );
}

export default OffcanvasExample;