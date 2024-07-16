// src/components/ContactDetail.js

import React from 'react';
import { useContacts } from '../contexts/ContactContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactDetail = () => {
  const { selectedContact, showContacts } = useContacts();

  if (!showContacts || !selectedContact) {
    return <div></div>;
  }

  return (
    <div className="container">
      <div>
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> {selectedContact.name.firstname} {selectedContact.name.lastname}</p>
        <p><strong>Email:</strong> {selectedContact.email}</p>
        <p><strong>Username:</strong> {selectedContact.username}</p>
        <p><strong>Address:</strong></p>
        <p>{selectedContact.address.street} {selectedContact.address.number}, {selectedContact.address.city}, {selectedContact.address.zipcode}</p>
        <p><strong>Geolocation:</strong> Lat: {selectedContact.address.geolocation.lat}, Long: {selectedContact.address.geolocation.long}</p>
        <p><strong>Phone:</strong> {selectedContact.phone}</p>
      </div>
    </div>
  );
};

export default ContactDetail;

