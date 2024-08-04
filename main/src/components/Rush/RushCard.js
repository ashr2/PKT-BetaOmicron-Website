import React from 'react';
import './RushCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <>
      <Col xs={12} md={4} style={{ padding: '0' }}>
        <img src={info.imgSrc} alt={info.header} style={imgStyle} />
      </Col>
      <Col xs={12} md={8} style={{ padding: '0' }}>
        <h1>{info.header}</h1>
        <p>{info.description}</p>
      </Col>
    </>
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
