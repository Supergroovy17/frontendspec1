// src/contexts/ContactContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showContacts, setShowContacts] = useState(false);

  // Fetch contacts from the API when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/users');
        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <ContactContext.Provider value={{ 
      contacts, 
      selectedContact,setSelectedContact, 
      showContacts,setShowContacts 
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
