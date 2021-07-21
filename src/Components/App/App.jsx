import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const useLocalStorage = (defaultValue, key) => {
    const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state, key]);

    return [state, setState];
}

const App = () => {
    const [contacts, setContacts] = useLocalStorage('contact', '');
    const [filter, setFilter] = useState('');
    // state = {
    //     contacts: [],
    //     filter: '',
    // }
    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts])
    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.contacts !== prevState.contacts) {
    //         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    // }
    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
            
        
    // }, [contacts])

    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts });
    //     }
    // }
    // const onSameName = (name, contacts) => {
    //     const hasName = contacts.find(el => el.name === name);
    //     return(hasName ? false : true)
    // }
    const addContact = ({name, number}) => {
        
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            return alert('Уже есть такое имя!')
        }
        const contact = {
            id: shortid.generate(),
            name,
            number,
        }
        setContacts(state => [contact, ...state]);
    }
    const deleteContact = evt => {
        const id = evt.target.dataset.id;

        const newContacts = contacts.filter(contact => contact.id !== id);

        setContacts(newContacts);
        setFilter('');
    }
    const changeFilter = evt => {
        setFilter(evt.currentTarget.value)
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = normalizedFilter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    : contacts;

    
    // const { filter} = this.state;
    // const filtredNames = getFiltredContacts();
    
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