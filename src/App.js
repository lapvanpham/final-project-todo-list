import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routers } from './routers';
import { AuthProvider, ProtectedRoute } from './app/authentication';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {routers.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.protect ? (
                    <ProtectedRoute>
                      <route.component />
                    </ProtectedRoute>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}
          </Routes>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
