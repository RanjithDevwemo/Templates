// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "../Css/Megamenu.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { Row ,Col} from 'react-bootstrap';
export default function Megamenu() {
  return (
    <div className=''>
      {[ 'xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" className='nav'>
          <Container fluid className='navbar'>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                  <Nav.Link href="#action1">
                  
                  <Link to="/" className='li' >Home</Link></Nav.Link>
                  <Nav.Link href="#action2"><Link to="/about" className='li' >About</Link></Nav.Link>
                  <Nav.Link href="#action2">
                  <Link to="/service" className='li' >Services</Link>
                    </Nav.Link>
                  <Nav.Link href="#action2">
                  <Link to="/contact" className='li' > Contact Us</Link>
                   </Nav.Link>
                  


                   <Container className='dropdown-content'>

                  <NavDropdown
                    title="Dropdown1"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='header'
                  >


                    <NavDropdown.Item href="#action3" className='action'>Action</NavDropdown.Item>
                 
                    <Row className='row'>
                    

                      <Col className='column'>

                      <div><ul>
            <li>Row1</li>
            <li>Tamil</li>
            <li>ldad</li>
            <li>dasasd</li>
            </ul></div>
            <div><ul>
            <li>Row2</li>
            <li>Tamil</li>
            <li>ldad</li>
            <li>dasasd</li>
            </ul></div>
            <div><ul>
            <li>Row3</li>
            <li>Tamil</li>
            <li>ldad</li>
            <li>dasasd</li>
            </ul></div>
                      </Col>

                      <Col className='column'>

                      <div><ul>
            <li>Row1</li>
            <li>Tamil</li>
            <li>ldad</li>
            <li>dasasd</li>
            </ul></div>
            <div><ul>
            <li>Row2</li>
            <li>Tamil</li>
            <li>ldad</li>
            <li>dasasd</li>
            </ul></div>
            <div><ul>
            <li>Row3</li>
            <li>Tamil</li>
            <li>ldad</li>
            <li>dasasd</li>
            </ul></div>
                      </Col>

                                        </Row>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>

              
                  </NavDropdown>
                  </Container>


                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}