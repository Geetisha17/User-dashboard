import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Userdetails from './pages/UserDetails';
import { Toaster } from 'react-hot-toast';
import UserProvider from './context/UserContext';
import './App.css';

function App() {

  return (
    <>
      <div>
        <UserProvider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/user/:id' element={<Userdetails/>} />
          </Routes>
          </BrowserRouter>
        </UserProvider>
        <Toaster position="top-right" reverseOrder={false}/>
        </div>
    </>
  )
}

export default App
