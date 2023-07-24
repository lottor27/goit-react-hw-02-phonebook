import React, { Component } from "react";
import Form from "./Phonebook/PhonebookForm";

export default class App extends Component  {
  state = {
    contacts: [],
    
  }

  formSubmitHandler = data =>{
    console.log(data);
  }

render(){
  return (
    
    <div>
    <Form onSubmit={this.formSubmitHandler}></Form>
<h2>Contacts</h2>
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
</div>
   );
}
  
};
