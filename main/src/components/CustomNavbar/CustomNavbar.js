import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './CustomNavbar.css'

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg">
          <Navbar.Brand href="#home" onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
          </Navbar.Brand>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="flex-column">
              <a href="home">Home</a><br/>
              <a href="rush">Rush</a><br/>
              <a href="social">Social</a><br/>
              <a href="alumni">Alumni</a><br/>
              <a href="academics">Academics</a><br/>
          </Modal.Body>
          <Modal.Footer>
            <h1 onClick={handleClose}> Close </h1>
          </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
}

export default CustomNavbar;