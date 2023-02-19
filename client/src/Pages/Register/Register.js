import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {register}  from '../../JS/Actions/user'






const Register = () => {
    const [newUser , setnewUser] = useState({})
     const dispatch = useDispatch()
    const navigate = useNavigate()

       const handleChange = (e) => {
      setnewUser({...newUser, [e.target.name] : e.target.value})
    }
    const handleUser = (e) =>
     {
      e.preventDefault()
    dispatch(register(newUser,navigate))}
  return (   
    <div>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={handleChange} name ="name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name ="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" onChange={handleChange} name ="password" />
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="phone" onChange={handleChange} name ="phone"/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleUser} >
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Register