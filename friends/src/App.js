import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './component/FriendsList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Soon...</h2>
        <FriendsList 
        />
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
