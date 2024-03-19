import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import swiftlogo from '../../assets/swiftlogo.png';
import search from '../../assets/Nav items.png';
import divider from '../../assets/Divider.png';

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#dbffdc', padding: '5px 50px' }}
      className="custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <span>
            <img src={swiftlogo} alt="logo" className="logo" />
            Swif<span className="drop">drop</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ marginRight: '20px' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ marginRight: '20px' }}>
              Services
            </Nav.Link>
            <Nav.Link href="#action3" style={{ marginRight: '20px' }}>
              About
            </Nav.Link>
            <Nav.Link href="#action4" style={{ marginRight: '20px' }}>
              Feature
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <img src={search} alt="" style={{ marginRight: '10px' }} />
            <img src={divider} alt="" style={{ marginRight: '10px' }} />
            <button style={{ marginRight: '10px' }}>Get started</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
