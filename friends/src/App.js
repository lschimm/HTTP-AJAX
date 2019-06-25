import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';
import { timingSafeEqual } from 'crypto';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendsList 
        />
        <h2>Friend Form List</h2>
        <FriendForm />
      </div>
    );
  }
}



// function App() {
//   return(
//     <div className="App">
//       <FriendsList 
//         id={this.state.}
      
      
      
//       />
//     </div>
//   )
// }

export default App;
