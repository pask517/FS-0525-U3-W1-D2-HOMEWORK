import { Component } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  render() {
    return (
      <Container>
        <h1 className="text-center mb-4">Single Book</h1>
        <Row className="justify-content-center ">
          <Col className="col-4 mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={this.props.img}
                height="500px"
                onClick={() => {
                  this.setState({
                    selected: true,
                  })
                }}
              />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text className="fw-bold">
                  Price: {this.props.price} $
                </Card.Text>
                <Card.Text className="fw-bold">
                  Category: {this.props.category}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SingleBook
