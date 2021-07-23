import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    });
    const [filter, setFilter] = useState('');

     useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

    const changeFilter = evt => {
        setFilter(evt.currentTarget.value)
    }

    const normalizedFilter = filter.toLowerCase()
    const filteredContacts = normalizedFilter
        ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
            console.log(contacts)
        )
        : contacts;
    
    const addContact = ({name, number}) => {
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            return alert('Уже есть такое имя!')
        }
        const contact = {
            id: shortid.generate(),
            name,
            number,
        }
        setContacts(prevState => [contact, ...prevState]);
    }
    const deleteContact = evt => {
        const id = evt.target.id;
        const newContacts = contacts.filter(contact => contact.id !== id);

        setContacts(newContacts);
        setFilter('');
    }
    

    return (    
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact}/>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
        </>
    )
    
}
export default App;