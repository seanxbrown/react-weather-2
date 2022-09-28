import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function NavbarComponent() {
    return (
        <Navbar className="mb-5 p-5">
        <Container>
          <Link to="/react-weather-2" className="navbar-brand">React Weather</Link>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto" variant="tabs">
              <Link to="/react-weather-2/savedcities" className="nav-link">Favourite Cities</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;