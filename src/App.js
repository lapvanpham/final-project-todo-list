import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home/"
import Login from './pages/login';
import SignUp from "./pages/singup"

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss"
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return (currentUser ?
      children : <Navigate to='/login' />
    )
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route index path='/' element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
