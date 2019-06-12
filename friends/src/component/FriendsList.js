import React from 'react';
import '../App.css';
import axios from 'axios';
import Friends from './Friends';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        console.log('inside CDM');
        axios
            .get('http://localhost:5000/friends')
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
                <p>{this.state.friends.map(friend => {
                    return (
                        <div>
                            <Friends 
                                friends={friend}
                            />
                        </div>
                )
                    })}</p>
            </div>
        )
    }
}

export default FriendsList;