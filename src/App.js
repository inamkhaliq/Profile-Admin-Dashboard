import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AdminDashboard from './Pages/AdminDashboard';
import Navbar from './Components/Ahmad/Ahmad';
import axios from "axios";
import { useEffect } from 'react';
import Bill from './Components/Bill/Bill';
import ApiCall from './Pages/ApiCall';
import ProtectedRoute from './Pages/ProtectedRoute';
import Register from './Pages/Register';
import Page404 from './Pages/Page404';
function App() {
  useEffect(()=>{
    // axios.get("/api/jsondata",{name:"inam"}).then((response)=>{
    //   console.log(response.data)
    // }).catch((err)=>{
    //   console.log(err)
    // });
  },[])
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/apicall' element={<ApiCall/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Admin Dashboard' element={<ProtectedRoute Element={<AdminDashboard/>}/>}/>
          <Route path='/Admin Dashboard/:tool' element={<ProtectedRoute Element={<AdminDashboard/>}/>}/>
          <Route path='/Bill' element={<Bill/>}/>
          <Route path='/*' element={<Page404/>}/>
        {/* <Route path='/ahmad' element={<Navbar/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
