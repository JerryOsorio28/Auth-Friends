import React from 'react';

const Home = (props) => {

    //Takes the user to the login page
    const clickHandler = e => {
        e.preventDefault();
        props.history.push('/login')
    }

    return (
        <h1>
            <button className='homeButton' onClick={clickHandler}>
            Tap to Start
            </button>
        </h1>
    )
};

export default Home;