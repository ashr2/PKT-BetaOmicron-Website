import React from 'react';
import './RushCard.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function RushCard({ info, imagePosition }) {
  const cardStyle = {
    backgroundColor: info.backgroundColor,
    color: info.textColor,
    padding: '0', // Remove padding from container
    borderRadius: '0', // Remove border-radius from container if needed
    margin: '0', // Remove margin from container
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '0', // Remove border-radius if a tight fit is desired
    margin: '0',
    padding: '0',
  };

  const leftAligned = (
    <Container fluid style={{ backgroundColor: '#A3392F', color: 'white', padding: '0px 0' }}>
          <Row>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              <img
                src={info.imgSrc}
                alt="Group of people"
                style={{ width: '100%', height: 'auto', maxHeight: '500px', display: 'block' }}
              />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <Card style={{ backgroundColor: '#A3392F', border: 'none', color: 'white', padding: '0 40px' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', alignItems: 'left'}}>
                    Academics
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
                    We take our majors seriously and have multiple academic events throughout the year in order to maintain our average 3.45 GPA. We get the rigor that comes with being an Engineer, and being part of our brotherhood means that you always have someone to reach out to if you're falling behind in any of your classes or need someone to study with.
                  </Card.Text>
                  <Button variant="outline-light" style={{ marginTop: '20px', padding: '10px 20px' }}>
                    LEARN MORE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  );

  const rightAligned = (
    <>
      <Col xs={12} md={8} style={{ padding: '0' }}>
        <h1>{info.header}</h1>
        <p>{info.description}</p>
      </Col>
      <Col xs={12} md={4} style={{ padding: '0' }}>
        <img src={info.imgSrc} alt={info.header} style={imgStyle} />
      </Col>
    </>
  );

  return (
    <Container fluid className="rush-card-container" style={cardStyle}>
      <Row className="rush-card-row">
        {imagePosition === 'left' ? leftAligned : rightAligned}
      </Row>
    </Container>
  );
}

export default RushCard;
