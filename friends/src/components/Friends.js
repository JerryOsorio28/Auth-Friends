import React, { useState, useEffect } from 'react'; 
import axiosWithAuth from '../helpers/axiosWithAuth';

//import Friend component
import Friend from './Friend';

export const Friends = () => {

    const [ friends, setFriends ] = useState([])
    console.log(friends)

    const [newFriend, setNewFriend] = useState({
        name: '',
        email: '',
        age: '',
        id: Date.now()
    })

    const changeHandler = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
       e.preventDefault();
       axiosWithAuth()
           .post('http://localhost:5000/api/friends', newFriend)
           .then(res => {
            console.log(res)
           })
           .catch(err => {
               console.log(err.response);
           })
   }
    

    useEffect(() => {

        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(...friends, res.data)
        })
        .catch(err => {
            // console.log(err.response)
        })
    }, [])

    return (
        <>
        <form onSubmit={submitHandler}>
            <h1>Add a friend!</h1>
            <h4>Name: </h4>
            <input 
                className='addFriendInput'
                type='text'
                placeholder='Name'
                name='name'
                value={newFriend.name}
                onChange={changeHandler}
            />
            <h4>E-mail: </h4>
            <input 
                className='addFriendInput'
                type='text'
                placeholder='Email'
                name='email'
                value={newFriend.email}
                onChange={changeHandler}
            />
            <h4>Age: </h4>
            <input 
                id='ageInput'
                type='text'
                placeholder='Age'
                name='age'
                value={newFriend.age}
                onChange={changeHandler}
            />
            <button 
            id='addFriendButton'
            className='loginButton'
            type='submit'
            >Add friend</button>
        </form>
         <h3>Friends:</h3>
         <div className='friendsList'>
            {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
         </div>
        </>
    );
};