import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string;
    email: string;
}
const Contacts = () => {
    // const [contact, setContact] = useState<IContact>({} as IContact);
    const [contact, setContact] = useState<IContact>({
        name: "",
        email: ""
    });
    const [contactList, setContactList] = useState<IContact[]>([]);

    console.log('contact', contact);

    const onClick = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: '',
            email: ''
        });
    }
    console.log('contactList', contactList);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    const handleRemove = (email: string) =>{
        const newContactList = contactList.filter(c => c.email !== email);
        setContactList(newContactList);
    }
    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input
                    value={contact.name}
                    onChange={onChange}
                    name="name"
                    placeholder="Contact Name"
                    type="text"
                />
                <input
                    value={contact.email}
                    onChange={onChange}
                    name="email"
                    placeholder="Contact Email"
                    type="email"
                />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con) =>
                    <Contact key={con.name} name={con.name} email={con.email} handleRemove={handleRemove} />
                )
            }
            {/* <Contact name="sima"/> */}
        </div>
    );
};

export default Contacts;