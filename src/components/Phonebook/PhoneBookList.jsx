import React from "react";


const PhoneBookList = ({visibleContacts, onDeleteContacts } ) =>{
  // console.log(visibleContacts);
    return(
      <div>
      
      <ul>
      {visibleContacts.map(contact =>( 
      <li 
      key={contact.id}>{contact.name}: {contact.number}
       <button
          type="button"
          onClick={() => onDeleteContacts(contact.id)}
        >
          Удалить
        </button></li> 
    ))}
  
</ul>
</div>
      )
    }

    


export default PhoneBookList