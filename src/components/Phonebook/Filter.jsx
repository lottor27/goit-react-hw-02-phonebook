import React from 'react';

const Filter = ({ value, onChange }) => {
// console.log(value);
return (
<label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>)}


export default Filter;