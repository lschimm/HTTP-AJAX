import React from 'react';

const AddFriend = (props) => {
    return (
        <form 
            className='friend-form'
            onSubmit={props.addAFriend}      
        >
            <input
                type= 'num'
                name='age'
                placeholder= '0'
            />
        </form>
    )
}

export default AddFriend;