import React from 'react';
import '../App.css';
import axios from 'axios';
import Friends from './Friends';
import AddFriend from './AddFriend';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],

            name: "",
            age: 0,
            email: ""
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

      changeHandler = event => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      
      addFriends = event => {
        event.preventDefault();
        const newFriend = { name: this.state.friends };
        this.setState ({ 
          name: [...this.state.friends, newFriend],
          friend: ''})
      }
      
      
      addFriend = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/friends', {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
        .then(response => {
          this.setState(obj => ({friends: response.data}))
        })
        .catch(err => {
          console.log('Error', err)
        })
        // this.setState({friendsInput:''})
      }

    render() {
        return (
            <div className="Friends-list">
                <p>{this.state.friends.map(friend => {
                    return (
                        <div>
                            <Friends 
                                friends={friend}
                                handleAddFriend={this.handleAddFriend}
                                newFriend = {friend}
                            />
                        </div>
                )
                    })}</p>
                    <h2>Add a friend...</h2>
                    <AddFriend
                    changeHandler={this.changeHandler} 
                    handleAddFriend={this.addFriend}/>
            </div>
        )
    }
}

export default FriendsList;