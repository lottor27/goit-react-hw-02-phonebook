import React from "react";

const PhoneBookList = ({contacts,deleteContacts} ) =>{
    
<ul>
    {contacts.map(({id, contacts, text,completed  }) =>
    (
       <li key={id}>{text}: {text}
       <button
          type="button"
          className="TodoList__btn"
          onClick={() => deleteContacts(id)}
        >
          Удалить
        </button></li> 
    ))}
  
</ul>
}

export default PhoneBookList