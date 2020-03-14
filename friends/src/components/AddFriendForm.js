// import React, { useState } from 'react';

// const AddFriendForm = () => {
//     console.log(friends)

    

//     const changeHandler = e => {
//         setNewFriend({...newFriend, [e.target.name]: e.target.value})
//     }
//     const submitHandler = e => {
//        e.preventDefault(); 
//        console.log(newFriend)
//        setNewFriend({...friends, newFriend})
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <h2>Add a friend!</h2>
//             <label>Name: </label>
//             <input 
//                 type='text'
//                 placeholder='Name'
//                 name='name'
//                 value={newFriend.name}
//                 onChange={changeHandler}
//             />
//             <label>E-mail: </label>
//             <input 
//                 type='text'
//                 placeholder='Email'
//                 name='email'
//                 value={newFriend.email}
//                 onChange={changeHandler}
//             />
//             <label>Age: </label>
//             <input 
//                 type='text'
//                 placeholder='Age'
//                 name='age'
//                 value={newFriend.age}
//                 onChange={changeHandler}
//             />
//             <button type='submit'>Add friend</button>
//         </form>
//     )
// };

// export default AddFriendForm;