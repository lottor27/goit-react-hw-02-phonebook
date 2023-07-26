import React, { Component } from "react";
import Form from "./Phonebook/PhonebookForm";
import allContacts from '../contacts.json'
import PhoneBookList from "./Phonebook/PhoneBookList";
import { nanoid } from 'nanoid'
import PhoneBookEditor from './Phonebook/PhoneBookEditor'
import Filter from "./Phonebook/Filter";

export default class App extends Component  {
  state = {
    contacts: allContacts,
    filter: '',
    
  }

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
          };
  
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // toggleCompleted = contactId => {
  
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.map(contact =>
  //       contact.id === contactId ? { ...contact, completed: !contact.completed } : contact,
  //     ),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
      
    );
  };


  formSubmitHandler = data =>{
    console.log(data);
  }

render(){
 


  return (
    
    <div>

      {/* <PhoneBookEditor onSubmit={this.addContact} /> */}

{/* <Filter onChange={this.changeFilter} /> */}

    

    <Form onSubmit={this.formSubmitHandler}></Form>
    <PhoneBookList />
</div>
   );
}
  
};
