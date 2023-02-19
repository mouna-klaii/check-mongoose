import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/Actions/user'


const NavBar = () => {
  const isAuth = useSelector(state =>state.userReducer.isAuth)
  const user = useSelector(state =>state.userReducer.user)
  const dispatch = useDispatch()
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/users-lists">List</Nav.Link>
          <Nav.Link href="/Add">Add</Nav.Link>
        </Nav>
        
        { isAuth ?
        <div>
        <p>{user.name}</p>
         <Button variant="outline-success" onClick={() =>dispatch(logout)}>Logout</Button>
         </div>
        :
         <div>
        <Button variant="outline-success" href='/login'>Login</Button>
        <Button variant="outline-success" href='/register'>Register</Button></div>
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar