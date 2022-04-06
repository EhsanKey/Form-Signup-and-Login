import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import "./App.css"
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <div className='App'>
      <Switch>
          <Route path="/login" component={Login } /> 
          <Route path="/signup" component={Signup} /> 
          <Redirect path='/' to="/login" />
      </Switch>
    </div>
  );
};

export default App;