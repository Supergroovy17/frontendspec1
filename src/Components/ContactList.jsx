// src/components/ContactList.js

import React from 'react';
import { useContacts } from '../contexts/ContactContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = () => {
  const { contacts, setSelectedContact, showContacts, setShowContacts } = useContacts();

  const handleToggleContacts = () => {
    setShowContacts(prevShowContacts => !prevShowContacts);
    setSelectedContact(null); // Clear selected contact when hiding contacts
  };

  return (
    <div className="container">
      <h2 className="my-3">Contact List</h2>
      <button className="btn btn-primary mb-3" onClick={handleToggleContacts}>
        {showContacts ? 'Hide Contacts' : 'Show Contacts'}
      </button>
      {showContacts && (
        <ul className="list-group">
          {contacts.map(contact => (
            <li
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className="list-group-item"
            >
              {contact.name.firstname} {contact.name.lastname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;


