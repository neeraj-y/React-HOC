import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filterText }) => {
    const filteredContacts = contacts.filter(contact => contact.name.indexOf(filterText) !== -1);

    return (
        <ul>
            {filteredContacts.map(
                (contact) => <li key={contact.email}>
                    <img src={contact.thumbnail} role='presentation' />
                    <div className='contactData'>
                        <strong>{contact.name}</strong>
                        <br/>
                        <small>{contact.email}</small>
                    </div>
                </li>
            )}
        </ul>
    )
}

ContactList.prototypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string.isRequired
}

export default ContactList;