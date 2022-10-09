import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { DashBoard } from './pages/DashBoard/DashBoard';
import { Login } from './pages/Login/Login';
import { UserDetails } from './pages/UserDetails/UserDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/Dashboard' element ={<DashBoard />} />
        <Route path='/User/:id' element ={<UserDetails />} />
      </Routes>
     
    </div>
  );
}

export default App;
