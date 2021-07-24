import React, { useState } from 'react';
import Contact,{ContactDemo} from './Contact';

const Contacts = () => {
    const [contact, setContact] =useState('');
    const [contactList, setContactList] = useState<string[]> ([]); 

    console.log('contact', contact);

    const onClick =()=>{
        setContactList([...contactList, contact]);
        setContact("");
    }
    console.log('contactList',contactList);
    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input 
                    value={contact}
                    onChange={(e)=> setContact(e.target.value)}
                    name="name" placeholder="Contact Name" type="text"
                 />
                 <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((contactName) => 
                    <Contact name={contactName} key={contactName} />
                )
            }
            <Contact name="Someone 1">
             <h1>Children</h1>   
            </Contact>
           <ContactDemo name="Someone 2">
             <h1>Children</h1>   
            </ContactDemo> 
            {/*        
            <Contact name="sima"/> */}
        </div>
    );
};

export default Contacts;