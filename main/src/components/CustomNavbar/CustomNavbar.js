import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavbar.css'
import logo from './logo1.png'

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="home"><img src={logo} height={'32px'} width={'65px'} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="rush"><b>Rush</b></Nav.Link>
            <Nav.Link href="social"><b>Social</b></Nav.Link>
            <Nav.Link href="alumni"><b>Professional & Alumni</b></Nav.Link>
            <Nav.Link href="academics"><b>Academics</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;