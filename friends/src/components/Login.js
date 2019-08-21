import React, { useState } from 'react'; 
import axios from 'axios';

export const Login = (props) => {
    //setting state for login credentials
    const [ credentials, setCredentials] = useState({username: 'Lambda School', password: 'i<3Lambd4'})

    //tracking login input changes
    const changeHandler = (e) => {
        const inputCredentials = {...credentials, [e.target.name]: e.target.value}
        setCredentials(inputCredentials)
    }

    //submitting/posting credentials to server
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friends')
        })
        .catch(err => console.log(err.response));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h3>Username</h3>
                <input 
                type='text' 
                placeholder='Username'
                name='username' 
                value={credentials.username}
                onChange={changeHandler}
                />
                <h3>Password</h3>
                <input 
                type='text' 
                placeholder='Password'
                name='password' 
                value={credentials.password}
                onChange={changeHandler}
                />
                <button 
                type='submit'
                >Add friend</button>
            </form>
        </>
    );
};