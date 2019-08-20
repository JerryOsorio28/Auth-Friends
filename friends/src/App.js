import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Route from react router dom
import { Route, Switch } from 'react-router-dom';

//importing Login component
import { Login } from './components/Login';

//importing Friends component
import { Friends } from './components/Friends';

//importing PrivateRoute component
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
