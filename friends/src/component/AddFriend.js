import React from 'react';

const AddFriend = (props) => {
    return (
        <form 
            className='friend-form'
            onSubmit={props.addFriend}      
        >
            <input
                type= 'text'
                name='name'
                placeholder= 'Name'
                value={props.value}
                onChange={props.changeHandler}
                //requried? 
            />{' '}
            <input
                type= 'num'
                name='age'
                placeholder= '0'
                value={props.value}
                onChange={props.changeHandler}
                //requried? 
            />{' '}
            <input
                type= 'email'
                name='email'
                placeholder= '...@gmail.com'
                value={props.value}
                onChange={props.changeHandler}
                //requried? 
            />
            <button onClick={props.handleAddFriend}>Add Friend
            </button>
        </form>
    )
}

export default AddFriend;