import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router'

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Daniel Willoughby
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Experience">
              Experience
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Projects">
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
