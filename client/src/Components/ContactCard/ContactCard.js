import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { deleteContact } from '../../JS/Actions/contact'
import "../../Pages/style.css"

const ContactCard = ({contact}) => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
  return (
    <div>
      <Helmet>
          <meta charSet='utf-8' />
          <title>Edit</title>
          <link rel='canonical' />  
        </Helmet>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text> {contact.phone}</Card.Text>        <Button variant="success" onClick={() => navigate (`/Edit/${contact._id}`)}>Edit</Button>
        <Button variant="danger" onClick={() => dispatch (deleteContact(contact._id))}>Delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default ContactCard