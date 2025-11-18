import { Container, Col, Row, Card, Button } from "react-bootstrap"
import Welcome from "./Welcome"
import horror from "../data/horror.json"
const AllTheBooks = () => {
  return (
    <main>
      <Welcome />
      <Container>
        <Row>
          {horror.map((book) => {
            return (
              <Col xs={12} md={4} lg={3} className="mb-4" key={book.asin}>
                <Card className="h-100 ">
                  <Card.Img variant="top" src={book.img} height="350px" />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className="fw-bold">
                      Price: {book.price} $
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </main>
  )
}
export default AllTheBooks
