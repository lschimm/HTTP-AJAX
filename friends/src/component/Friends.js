import React from 'react';
import '../App.css';

function Friends(props) {
    return (
        <div>
            <p>Name: {' '} {props.friends.name} {' '}
            Age: {' '} {props.friends.age} {' '}
            Email: {' '} {props.friends.email}</p>
        </div>
    )
}



export default Friends;