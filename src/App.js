
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Login from "./components/login"
import './App.css';
import Logout from './components/logout';
import Showemployee from './components/showemployee';
import Createemployee from './components/createemployee';
import Home from './components/home';
import Register from './components/register';
import Navbar from './components/navbar';
import Updateemployee from './components/updateemployee';


function App() {
  return (
    <>
    <Routes>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/logout" exact element={<Logout/>}/>
      <Route path="/showemployee" exact element={<Showemployee/>}/>
      <Route path="/createemployee" exact element={<Createemployee/>}/>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/navbar" exact element={<Navbar/>}/>
      <Route path="/update/:id"  element={<Updateemployee/>} />

      
    </Routes>

    </>
  );
}

export default App;
