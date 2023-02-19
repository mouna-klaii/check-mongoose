import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router'
import { addContact } from '../../JS/Actions/contact'

const Add = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const err = useSelector((state) => state.contactReducer.errors)
    const [newContact, SetNewContact] = useState({})
    const handleChange = (e) =>{SetNewContact(
        {...newContact, [e.target.name] : e.target.value}
    )}
const handleAdd = () => {
    dispatch (addContact(newContact , navigate))
   
}
    return (
      <div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your Name : </Form.Label>
        <Form.Control type="text" placeholder="enter your name :" onChange = {handleChange} name = 'name'/>
        <Form.Label>email : </Form.Label>
        <Form.Control type="email" placeholder="Enter your email :" onChange = {handleChange} name = 'email'/>
        <Form.Label>phone : </Form.Label>
        <Form.Control type="text" placeholder="enter your phone :" onChange = {handleChange} name = 'phone'/>
      </Form.Group>
            <Button variant="primary" type="submit" onClick={handleAdd}>
        Add
      </Button>
    <h2> {err ? err : null} </h2>

    </div>
  )
}

export default Add