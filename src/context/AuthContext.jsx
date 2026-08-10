import React, { createContext, useContext, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// ROUTE GUARDS 

// for only logged-in users
export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

//for unlogged users 
export function PublicRoute() {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
}