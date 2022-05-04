import React from 'react';
import "./contactsModal.css"


export const ContactsModal = ({ContactActive, ContactSetActive}) => {
    return (
        <div className={ContactActive ? "contactsModal active" : "contactsModal"} onClick={() => ContactSetActive(false)}>
            <div className="contactsModal_content" onClick={e => e.stopPropagation()}>
                <h1>Contacts</h1>
            </div>
        </div>
    );
};