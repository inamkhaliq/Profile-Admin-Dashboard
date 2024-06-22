import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import AdminDashboard from './Pages/AdminDashboard';
import Navbar from './Components/Ahmad/Ahmad';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Admin Dashboard' element={<AdminDashboard/>}/>
        <Route path='/Admin Dashboard/:tool' element={<AdminDashboard/>}/>
        {/* <Route path='/ahmad' element={<Navbar/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
