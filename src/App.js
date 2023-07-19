import React from 'react';
import { Routes, Route,
 } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Principal from './components/Principal';
import Biografia from "./components/Biografia";
import List from './components/List';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/Principal' element={<Principal/>} />
      <Route path='/Biografia' element={<Biografia/>} />
      <Route path='/List' element={<List/>} />
     </Routes>
  );
}

export default App;
