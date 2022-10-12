import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { DashBoard } from './pages/DashBoard/DashBoard';
import { Login } from './pages/Login/Login';
import { UserDetails } from './pages/UserDetails/UserDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/users' element ={<DashBoard />} />
        <Route path='/user/:id' element ={<UserDetails />} />
        <Route path='/*' element ={<h1>404 error paage not found</h1>} />
      </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
