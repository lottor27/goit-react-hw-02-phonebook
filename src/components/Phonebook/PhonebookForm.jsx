import React, { Component } from "react";
import { nanoid } from 'nanoid'

class Form extends Component{
  nameInputId = nanoid();
  numberInputId = nanoid();

    state = {
    name: '',
    number: ''
    }

handleChange=(event) =>{

const {name, value} = event.currentTarget;

this.setState({
  [name]:value})
}

handleSabmit=(event) =>{
  event.preventDefault()

  console.log(this.state);
  this.props.onSubmit(this.state)

  this.reset()
}

reset =()=>{
    this.setState({name:'', number:''})
}

render(){
        return(
          <form onSubmit={this.handleSabmit}>
      <h2>Phonebook</h2>
    <label htmlFor={this.nameInputId}>
    Name
      <input
      onChange={this.handleChange}
      value={this.state.name}
      id={this.nameInputId}
    type="text"
    name="name"
    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
 />
 </label>
 <label htmlFor={this.numberInputId}>
  Number
 
 <input
 value={this.state.number}
 onChange={this.handleChange}
 id={this.numberInputId}
  type="tel"
  name="number"
  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>
 <button type="submit">Add contact</button>
 
</form>  
        );
    }
}

export default Form