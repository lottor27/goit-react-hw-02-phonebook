// import React, { Component } from 'react';


// class PhoneBookEditor extends Component {
//     state = {
//         name: '',
//         number: ''
//         }

//         handleChange=(event) =>{

//             const {name, value} = event.currentTarget;
//             this.setState({
//               [name]:value})
//             }

//             andleSabmit=(event) =>{
//                 event.preventDefault()
              
//                 console.log(this.state);
//                 this.props.onSubmit(this.state)
              
//                 this.reset()
//               }

//   render() {
//     return (
//       <form className="PhoneBookEditor" onSubmit={this.handleSubmit}>
//         <textarea
//           className="PhoneBookEditor__textarea"
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></textarea>
//         <button type="submit" className="PhoneBookEditor__button">
//           Сохранить
//         </button>
//       </form>
//     );
//   }
// }

// export default PhoneBookEditor;