import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../JS/Actions/contact';
import {useNavigate} from "react-router-dom";

const UserCard = ({contact}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

  return (
    <div >
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
    <Card.Body>
      <Card.Title>{contact.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.phone}</Card.Subtitle>
      <Card.Text>
        {contact.email}
      </Card.Text>
      <Button onClick={() => dispatch(deleteContact(contact._id))}  variant='danger'>Delete</Button>
      <Button  onClick={() => navigate(`/Edit/${contact._id}`)} variant='success'>Edit</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default UserCard