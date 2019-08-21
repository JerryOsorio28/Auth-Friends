import React from 'react';
import logo from './logo.svg';
import './App.scss';

//import Route from react router dom
import { Route } from 'react-router-dom';

//importing Login component
import { Login } from './components/Login';

//importing Friends component
import { Friends } from './components/Friends';

//importing PrivateRoute component
import PrivateRoute from './components/PrivateRoute'

//importing Home component
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
