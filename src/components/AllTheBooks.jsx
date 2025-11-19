import { Container, Col, Row, Card, Button } from "react-bootstrap"
import Welcome from "./Welcome"
import horrorBooks from "../data/horror.json"
import SingleBook from "./SingleBook"
import fantasyBooks from "../data/fantasy.json"
import romanceBooks from "../data/romance.json"
import scifiBooks from "../data/scifi.json"
import BookList from "./BookList"
const AllTheBooks = () => {
  return (
    <main>
      <Welcome />
      <SingleBook
        title={horrorBooks[0].title}
        price={horrorBooks[0].price}
        category={horrorBooks[0].category}
        img={horrorBooks[0].img}
      />
      <BookList array={scifiBooks} />
      <Container>
        <Row>
          {horrorBooks.map((book) => {
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
