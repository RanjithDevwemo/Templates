// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  MDBContainer,
  MDBCol,
  MDBNavbarItem,

  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from 'mdb-react-ui-kit';
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
// import { useState } from 'react';

function OffcanvasExample() {
  // const[open,setopen]=useState(false);
  function Click(){
   
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    
  }


  return (
    <div className='nav'>
      
      {[ 'lg'].map((expand) => (
 
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 nav-main">
          <div className="navbar">
          <Container fluid className='con'>
           
           
            <Navbar.Brand href="#"><img src={logo} alt="Logo image" title='Logo image' className='logo' /></Navbar.Brand>
           
            <div className="offcan">
               <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /></div>
            

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
                  <Nav.Link href="" ><Link to="/" className='li' >Home</Link></Nav.Link>
                  <Nav.Link href="#action2"><Link to="/link" className='li'>Link</Link></Nav.Link>
                  <Nav.Link href="#action2"><Link to="/blog" className='li'>Blog</Link></Nav.Link>
                 



                  <MDBNavbarItem className='position-static'>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='Mega-menu'>
                Mega menu
              </MDBDropdownToggle>
              <MDBDropdownMenu
                className='drop'
                style={{
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                }} 
              >
                <MDBContainer className='mdbcon'>
                  <MDBRow className='my-4'>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                        <Link to="/" className='li' onClick={Click}>Lorem ipsum</Link>
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        <Link to="/career" className='li' onClick={Click}>Career</Link>

                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                        <Link to="/FlyerHome" className='li' onClick={Click}>FlyerHome</Link>

                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Adipisicing elit
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                          Explicabo voluptas
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Perspiciatis quo
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laudantium maiores
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Provident dolor
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                          Iste quaerato
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Est iure
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Praesentium
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Laboriosam
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3'>
                      <MDBListGroup flush>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Saepe
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Vel alias
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Sunt doloribus
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          Cum dolores
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>



                  <NavDropdown
                // className="pr-2 py-2 align-text-top"
                title="MegaMenu"
                id="basic-nav-dropdown" className='megamenu'
              >
                <Container className="eventsNav ">
                  <div className="row">
                  <Row className='row1'>
                    <Col>
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
                      <Dropdown.Divider />
                    </Col>

                    <Col >
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
                    
                    <Col >
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
                  </div>
                </Container>
              </NavDropdown>
              

                  {/* <Megamenu/> */}
                </Nav>
               
                 
                  <Popup/>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          </div>
          <span style={{transform:`translateX(${100-100}%)`}} 
          className='absolute bg-yellow-400 h-1 w-full bottom-0'/>

          
        </Navbar>
       
      ))}
    </div>
  );
}

export default OffcanvasExample;