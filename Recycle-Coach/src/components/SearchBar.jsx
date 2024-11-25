import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function LookupPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search results (replace with API calls in a real app)
    const mockResults = [
      { id: 1, item: 'Plastic Bottles', instructions: 'Recycle in blue bins.' },
      {
        id: 2,
        item: 'Electronics',
        instructions: 'Drop off at e-waste centers.',
      },
    ];
    setResults(mockResults);
  };

  return (
    <Container>
      <h1 className="text-center my-4">Look Up Recycling Information</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Group controlId="searchQuery">
            <Form.Control
              type="text"
              placeholder="Search for an item (e.g., glass bottles)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSearch} className="mt-2">
            Search
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        {results.length > 0 &&
          results.map((result) => (
            <Col md={4} key={result.id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{result.item}</Card.Title>
                  <Card.Text>{result.instructions}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default LookupPage;
