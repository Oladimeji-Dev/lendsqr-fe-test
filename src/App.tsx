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
        <Route path='/dashboard' element ={<DashBoard />} />
        <Route path='/user/:id' element ={<UserDetails />} />
        <Route path='/*' element ={<h1>404 error paage not found</h1>} />
      </Routes>
     
    </div>
  );
}

export default App;
