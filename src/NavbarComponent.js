import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavbarComponent() {
    return (
        <Navbar className="mb-5 p-4 bg-gradient bg-info">
        <Container>
          <Navbar.Brand>React Weather</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Favourite Cities</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;