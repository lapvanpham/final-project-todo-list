import React, { createContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

import { userGetDetails } from '../../services/user';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({
    _id: null,
    name: null,
    email: null,
    showLogin: false,
    isLogin: false,
    loading: true,
  })
  // const location = useLocation();

  const user = localStorage.getItem('user');

  const handleLoginApi = () => {
    if (user) {
      setLoginState(prev => ({
        ...prev,
        loading: true
      }))

      userGetDetails().then(response => {
        if (response?.success) {
          const { _id, email, name } = response.data;

          setLoginState(prev => ({
            ...prev,
            isLogin: true,
            _id,
            email,
            name
          }))
        }
      }).catch(error => {
        localStorage.removeItem('user');

        setLoginState(prev => ({
          ...prev,
          name: null,
          email: null,
          isLogin: false,
        }))

        console.log("Login error: ", error);
      }).finally(() => {
        setLoginState(prev => ({
          ...prev,
          showLogin: false,
          loading: false
        }))
      })
    } else (
      setLoginState({
        name: null,
        email: null,
        showLogin: false,
        isLogin: false,
        loading: false,
      })
    )
  }

  const handleOpenLogin = () => {
    if (!loginState.showLogin) {
      setLoginState(prev => ({
        ...prev,
        showLogin: true
      }))
    }
  }
  const handleCloseLogin = () => {
    if (loginState.showLogin) {
      setLoginState(prev => ({
        ...prev,
        showLogin: false
      }))
    }
  }

  const LoginContextData = {
    loginState,
    handleOpenLogin,
    handleCloseLogin
  }

  useEffect(() => {
    handleLoginApi();
  }, [user]);

  // useEffect(() => {
  //     window.scrollTo(0, 0);
  // }, [location]);

  return (
    <AuthContext.Provider value={LoginContextData}>
      {children}
    </AuthContext.Provider>
  )
}