import { Container, Navbar, Nav } from "react-bootstrap"

const MyNav = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="ms-5">
          <Navbar.Brand href="#home" className="fs-1 text-primary">
            EpiBooks
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="fs-5">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="fs-5">
                About
              </Nav.Link>
              <Nav.Link href="#" className="fs-5">
                Browse
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default MyNav
