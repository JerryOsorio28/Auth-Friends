import React from 'react';

const Friend = (props) => {
    return (
        <>
            <div>
                {props.friend.name}
            </div>
            <div>
                {props.friend.email}
            </div>
            <div>
                {props.friend.age}
            </div>
        </>
    )
};

export default Friend;