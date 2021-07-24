import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
            {contacts.map(({ id, name, number}) => (
                <div key={id} className={s.divItem}>
                    <li className={s.liItem}>{name}: {number}</li> <button onClick={(evt)=>onDeleteContact(evt)} className={s.btn} id={id}>Delete</button>
                </div>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    onDeleteContact: PropTypes.func.isRequired,

};
export default ContactList;

