import React, { useState, useEffect } from 'react'; 
import axiosWithAuth from '../helpers/axiosWithAuth';

//import Friend component
import Friend from './Friend';

export const Friends = () => {

    const [ friends, setFriends ] = useState([])

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
               // localStorage.setItem('token', res.data.payload)
               // props.history.push('/friends');
               // console.log(res.data);
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
            console.log(err.response)
        })
    }, [])

    return (
        <>
        <form onSubmit={submitHandler}>
            <h1>Add a friend!</h1>
            <label>Name: </label>
            <input 
                type='text'
                placeholder='Name'
                name='name'
                value={newFriend.name}
                onChange={changeHandler}
            />
            <label>E-mail: </label>
            <input 
                type='text'
                placeholder='Email'
                name='email'
                value={newFriend.email}
                onChange={changeHandler}
            />
            <label>Age: </label>
            <input 
                type='text'
                placeholder='Age'
                name='age'
                value={newFriend.age}
                onChange={changeHandler}
            />
            <button type='submit'>Add friend</button>
        </form>
         <h3>Friends:</h3> 
        {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
        </>
    );
};