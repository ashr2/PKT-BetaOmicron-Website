import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavbar.css'

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="home">Phi Kappa Tau</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="rush">Rush</Nav.Link>
            <Nav.Link href="social">Social</Nav.Link>
            <Nav.Link href="alumni">Professional & Alumni</Nav.Link>
            <Nav.Link href="academics">Academics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;