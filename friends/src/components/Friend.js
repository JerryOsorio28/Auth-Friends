import React from 'react';

const Friend = (props) => {
    return (
        <div className='friendCard'>
            <div className='cardName'>
                Name: {props.friend.name}
            </div>
            <div className='email'>
                E-mail: {props.friend.email}
            </div>
            <div className='age'>
                Age: {props.friend.age}
            </div>
        </div>
    )
};

export default Friend;