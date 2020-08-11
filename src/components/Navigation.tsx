import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation