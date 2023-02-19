import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router'
import { editContact, getContact,  } from "../../JS/Actions/contact";


const Edit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const match = useMatch('/Edit/:id')
const id = match.params.id
    const contacttoGet = useSelector( state => state.contactReducer.contactToGet)

    const [newContact, SetNewContact] = useState({})
    const handleChange = (e) =>{SetNewContact(
      {...newContact, [e.target.name] :e.target.value}
      )}
      useEffect(() => {
        dispatch(getContact(id));

      }, 
      [dispatch] );
      
      const handleEdit = () =>{
        dispatch (editContact(id , newContact , navigate))
      };
      console.log(contacttoGet)
      console.log(id)

  return (
    <div>
       
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name : </Form.Label>
        <Form.Control type="text" placeholder={contacttoGet.name} onChange = {handleChange} name="name"/>
        <Form.Label>email : </Form.Label>
        <Form.Control type="text" placeholder={contacttoGet.email} onChange = {handleChange} name ="email"/>
        <Form.Label>phone : </Form.Label>
        <Form.Control type="text" placeholder={contacttoGet.phone} onChange = {handleChange} name = "phone"/>
      </Form.Group>
     <Button variant="primary" type="submit" onClick={handleEdit}> Edit
      </Button>
    
      
    
    </div>
    
  );
};



export default Edit
