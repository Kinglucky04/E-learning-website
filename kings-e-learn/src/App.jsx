import { useState } from 'react'
import { AuthProvider, useAuth } from './components/hooks/useAuth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './components/hero/Homepage'
import LandingPage from './components/LandingPage'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes (Requires Login) */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
