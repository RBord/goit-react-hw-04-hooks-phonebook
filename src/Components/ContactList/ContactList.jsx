import React from 'react';
import s from '../ContactList/ContactList.module.css';

function ContactList  ({contacts, onDeleteContact})  {
    return (
        <ul>
            {contacts.map(({ id, name, number}) => (
                
                <div key={id} className={s.divItem}>
                    <li className={s.liItem}>{name}: {number}</li> <button onClick={(evt)=>onDeleteContact(evt)} className={s.btn}>Delete</button>
                </div>
                
            ))}
        </ul>
    )
}
export default ContactList;