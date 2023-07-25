import React, { Component } from "react";
import Form from "./Phonebook/PhonebookForm";
import contacts from '../components/contacts'
import PhoneBookList from "./Phonebook/PhoneBookList";
import { nanoid } from 'nanoid'

export default class App extends Component  {
  state = {
    contacts: [{id: "id-1", name: "Rosie Simpson", number: "459-12-56"},

    {id: "id-2", name: "Hermione Kline", number: "443-89-12"},

    {id: "id-3", name: "Eden Clements", number: "645-17-79"},

    {id: "id-4", name: "Annie Copeland", number: "227-91-26"}],
    
  }

  addContact = text => {
    const contact = {
      id: nanoid(),
      text,
      completed: false,
    };
  
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  toggleCompleted = contactId => {
  
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact =>
        contact.id === contactId ? { ...contact, completed: !contact.completed } : contact,
      ),
    }));
  };


  formSubmitHandler = data =>{
    console.log(data);
  }

render(){
  return (
    
    <div>
    <Form onSubmit={this.formSubmitHandler}></Form>
<PhoneBookList id={2} contacts={contacts}/>
</div>
   );
}
  
};
