import React from 'react';
import '../App.css';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        console.log('inside CDM');
        axios.get('http://localhost:5000/')
        .then( res => {
          console.log(res);
          this.setState({ friends: res.data })
        })
        .catch(err => {
          console.log(err)
        })
      }

    render() {
        return (
            <div className="Friends-list">
                <h2>Friendslist</h2>
                <p>Woop</p>
                <p>{this.state.friends}</p>
            </div>
        )
    }
}

export default FriendsList;