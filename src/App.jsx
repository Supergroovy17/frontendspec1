import React from 'react';
import { ContactProvider } from './contexts/ContactContext';
import ContactList from './Components/ContactList';
import ContactDetail from './Components/ContactDetail';

const App = () => {
  return (
    <ContactProvider>
      <div>
        <h1>Contact Management App</h1>
        <ContactList />
        <ContactDetail />
      </div>
    </ContactProvider>
  );
};

export default App;
