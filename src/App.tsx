import {Routes,Route} from 'react-router-dom'
import { DashBoard } from './pages/DashBoard/DashBoard';
import { Login } from './pages/Login/Login';
import { UserDetails } from './pages/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/*' element ={<h1>404 error paage not found</h1>} />
        <Route path='users' element ={<DashBoard />} />
        <Route path='user/:id' element ={<UserDetails />} />

        {/* Private Route that cannot be access unless loged in */}
        {/* <Route path='users' element ={<PrivateRoutes />}>
          <Route path='users' element ={<DashBoard />} />
        </Route>
        <Route path='user' element ={<PrivateRoutes />}>
          <Route path='user/:id' element ={<UserDetails />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
