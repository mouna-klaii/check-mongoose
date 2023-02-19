import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { login } from '../../JS/Actions/user'

const Login = () => {
  const [user , setuser] = useState({})
  const dispatch = useDispatch()
 const navigate = useNavigate()

    const handleChange = (e) => {
   setuser({...user, [e.target.name] : e.target.value})
 }
 const handleUser = (e) =>
  {
   e.preventDefault()
 dispatch(login(user,navigate))}
  return ( 
    <div> 
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name = "email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group> 
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" onChange={handleChange} name = "password" />
      </Form.Group>
            <Button variant="primary" type="submit" onClick ={handleUser}>
        Submit 
      </Button>
    </Form>


    </div>
  )
}

export default Login