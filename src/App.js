import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import "./App.css"
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <div className='App'>
      <Routes>
          <Route path="/login" element={<Login /> } /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path='/' element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
};

export default App;