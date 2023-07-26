import React from "react";


const PhoneBookList = ({allContacts} ) =>{
    return(
    <ul>
      {allContacts.map(({id, name, number})=>( 
      <li 
      key={id}>{name}: {number}
       <button
          type="button"
          
          onClick={() => console.log('Delete')}
        >
          Удалить
        </button></li> 
    ))}
  
</ul>)
}

export default PhoneBookList