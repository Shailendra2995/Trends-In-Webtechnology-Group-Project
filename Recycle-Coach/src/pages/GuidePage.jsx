import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function GuidePage() {
  const wasteItems = [
    {
      name: 'Styrofoam',
      image: '/assets/images/styrofoam.jpg',
      description: 'Styrofoam cannot be recycled in most programs.',
    },
    {
      name: 'Metal Paint Cans',
      image: '/assets/images/metal-paint-cans.jpg',
      description: 'Dispose of paint cans at hazardous waste facilities.',
    },
    {
      name: 'Milk and Juice Cartons',
      image: '/assets/images/milk-cartons.jpg',
      description: 'Cartons can be recycled. Check local guidelines.',
    },
    {
      name: 'Glass Bottles',
      image: '/assets/images/glass-bottles.jpg',
      description: 'Glass bottles can be recycled. Ensure they are clean.',
    },
    {
      name: 'Plastic Bags',
      image: '/assets/images/plastic-bags.jpg',
      description: 'Plastic bags should be reused or disposed of properly.',
    },
    {
      name: 'Electronics',
      image: '/assets/images/electronics.jpg',
      description: 'Recycle e-waste at designated collection points.',
    },
    {
      name: 'Batteries',
      image: '/assets/images/batteries.jpg',
      description: 'Dispose of batteries at special recycling centers.',
    },
    {
      name: 'Aluminum Cans',
      image: '/assets/images/aluminum-cans.jpg',
      description: 'Aluminum cans are highly recyclable.',
    },
    {
      name: 'Pizza Boxes',
      image: '/assets/images/pizza-boxes.jpg',
      description: 'Pizza boxes can be recycled if free of grease.',
    },
  ];

  return (
    <Container className="py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Recyclepedia</h1>
        <p className="text-muted">Discover the correct disposal methods for common materials.</p>
      </div>

      {/* Product Grid */}
      <Row className="product-grid">
        {wasteItems.map((item, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="product-card shadow-sm h-100">
              <Link to={`/details/${item.name}`} className="product-link">
                {/* Product Image */}
                <div className="product-image-container">
                  <Card.Img variant="top" src={item.image} alt={item.name} className="product-image" />
                </div>

                {/* Product Details */}
                <Card.Body>
                  <Card.Title className="product-title">{item.name}</Card.Title>
                  <Card.Text className="text-muted product-description">{item.description}</Card.Text>
                  <Button variant="outline-primary" className="learn-more-btn">
                    Learn More <FaArrowRight className="ms-1" />
                  </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GuidePage;
