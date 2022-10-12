import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { DashBoard } from './pages/DashBoard/DashBoard';
import { Login } from './pages/Login/Login';
import { UserDetails } from './pages/UserDetails/UserDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './util/PrivateRoutes';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/*' element ={<h1>404 error paage not found</h1>} />
        
        {/* Private Route that cannot be access unless loged in */}
        <Route path='/users' element ={<PrivateRoutes />}>
          <Route path='/users' element ={<DashBoard />} />
        </Route>
        <Route path='/users' element ={<PrivateRoutes />}>
          <Route path='/user/:id' element ={<UserDetails />} />
        </Route>
      </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
