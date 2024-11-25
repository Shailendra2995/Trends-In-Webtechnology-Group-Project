import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function DetailPage() {
  const { itemName } = useParams();

  const wasteItems = [
    {
      name: 'Styrofoam',
      image: '/assets/images/styrofoam.jpg',
      description: 'Styrofoam cannot be recycled in most programs.',
    },
    {
      name: 'Metal paint cans',
      image: '/assets/images/metal-paint-cans.jpg',
      description: 'Clean and dispose of paint cans at hazardous waste facilities.',
    },
    {
      name: 'Milk and juice cartons',
      image: '/assets/images/milk-cartons.jpg',
      description: 'Cartons can be recycled, check local guidelines.',
    },
    {
      name: 'Glass bottles',
      image: '/assets/images/glass-bottles.jpg',
      description: 'Glass bottles can be recycled. Ensure they are clean and dry.',
    },
    {
      name: 'Plastic bags',
      image: '/assets/images/plastic-bags.jpg',
      description: 'Plastic bags should be reused or disposed of properly.',
    },
    {
      name: 'Electronics',
      image: '/assets/images/electronics.jpg',
      description: 'E-waste should be recycled at designated collection points.',
    },
    {
      name: 'Batteries',
      image: '/assets/images/batteries.jpg',
      description: 'Batteries should be disposed of at special recycling centers.',
    },
    {
      name: 'Tetra Paks',
      image: '/assets/images/tetra-paks.jpg',
      description: 'Tetra Paks can be recycled in specific programs.',
    },
    {
      name: 'Plastic bottles',
      image: '/assets/images/plastic-bottles.jpg',
      description: 'Plastic bottles can be recycled. Check local guidelines for collection.',
    },
    {
      name: 'Aluminum cans',
      image: '/assets/images/aluminum-cans.jpg',
      description: 'Aluminum cans are highly recyclable and should be placed in recycling bins.',
    },
    {
      name: 'Clothing',
      image: '/assets/images/clothing.jpg',
      description: 'Donate or recycle old clothing instead of throwing them away.',
    },
    {
      name: 'Newspapers',
      image: '/assets/images/newspapers.jpg',
      description: 'Newspapers can be recycled easily. Ensure they are clean and dry.',
    },
    {
      name: 'Magazines',
      image: '/assets/images/magazines.jpg',
      description: 'Magazines can be recycled, but check your local recycling program.',
    },
    {
      name: 'Plastic containers',
      image: '/assets/images/plastic-containers.jpg',
      description: 'Plastic containers should be cleaned and placed in recycling bins.',
    },
    {
      name: 'Pizza boxes',
      image: '/assets/images/pizza-boxes.jpg',
      description: 'Pizza boxes can be recycled if they are not greasy.',
    },
    {
      name: 'Plastic straws',
      image: '/assets/images/plastic-straws.jpg',
      description: 'Plastic straws should be avoided, or recycled if possible.',
    },
    {
      name: 'Corks',
      image: '/assets/images/corks.jpg',
      description: 'Corks can be recycled or composted, depending on your local programs.',
    },
    {
      name: 'Disposable cups',
      image: '/assets/images/disposable-cups.jpg',
      description: 'Disposable cups should be reused or disposed of properly.',
    },
    {
      name: 'Yogurt containers',
      image: '/assets/images/yogurt-containers.jpg',
      description: 'Yogurt containers can be recycled if clean and empty.',
    },
    {
      name: 'Toothpaste tubes',
      image: '/assets/images/toothpaste-tubes.jpg',
      description: 'Toothpaste tubes can often be recycled; check the material.',
    },
  ];

  const item = wasteItems.find((waste) => waste.name === itemName);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h4>How to Manage:</h4>
          <p>Learn about the best ways to handle {item.name}.</p>
          <Button variant="primary" onClick={() => alert('Learn more...')}>
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailPage;
