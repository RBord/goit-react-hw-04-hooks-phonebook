import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
    const [contacts, setContacts] = useState([() => JSON.parse(window.localStorage.getItem('contacts')) ?? '']);
    const [filter, setFilter] = useState('');
    // state = {
    //     contacts: [],
    //     filter: '',
    // }

    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.contacts !== prevState.contacts) {
    //         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    // }
    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
            
        
    }, [contacts])

    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts });
    //     }
    // }
    const onSameName = (name, contacts) => {
        const hasName = contacts.find(el => el.name === name);
        return(hasName ? false : true)
    }
    const addContact = (name, number) => {
        const contact = {
            id: shortid.generate(),
            name: name,
            number: number,
        }

        setContacts(prevState => {
            const isUnique = onSameName(contact.name, prevState.contacts);
            if (isUnique) {
                return {
                    contacts: [contact, ...prevState.contacts]
                };
            } else {
                alert('Контакт с таким Именем уже добавлен!')
            }
        })
    }
    const deleteContact = contactId => {
        setContacts(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))
    }
    const changeFilter = evt => {
        setFilter(evt.currentTarget.value)
    }
    const getFiltredContacts = () => {
        // const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    }

    
    // const { filter} = this.state;
    const filtredNames = getFiltredContacts();
    
    return (    
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={()=>addContact}/>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList value={filtredNames} onDeleteContact={deleteContact}/>
        </>
    )
    
}
export default App;