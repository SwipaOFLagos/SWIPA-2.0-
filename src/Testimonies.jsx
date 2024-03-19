import Card from 'react-bootstrap/Card';

function Testimonies() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>

        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quod commodi qui quia quam illo iusto quibusdam laboriosam fugit unde.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Testimonies;