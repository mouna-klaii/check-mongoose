import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../../Components/ContactCard/ContactCard";
import { getContacts } from "../../JS/Actions/contact";
import { Helmet } from "react-helmet";
import "../style.css"

const ContactLists = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  console.log(listContacts);
  const load = useSelector((state) => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      <Helmet>
        <meta charset="utm-8" />
        <title>ContactLists</title>
        <link rel="comonical" />
        <h1>Contact Lists</h1>
      </Helmet>
      <div className="userlist">
        {load ? (
          <Spinner animation="bordure " />
        ) : (
          listContacts.map((el) => <ContactCard contact={el} key={el._id} />)
        )}
      </div>
    </div>
  );
};

export default ContactLists;
