// import React, { Component } from 'react';


// class PhoneBookEditor extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = e => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.message);

//     this.setState({ message: '' });
//   };

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