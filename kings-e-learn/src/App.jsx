import { useState } from 'react'
import { AuthProvider, useAuth } from './components/hooks/useAuth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './components/hero/Homepage'
import LandingPage from './components/LandingPage'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import AllCourses from './components/hero/Courses/AllCourses';
import FrontendCourses from './components/hero/Courses/Web2/Frontend';
import BackendCourses from './components/hero/Courses/Web2/Backend';  
import WebRoadmap from './components/hero/Courses/Roadmap';
import Web3Courses from './components/hero/Courses/Web3/Web3Courses';
import ProfilePage from './components/ProfilePage';

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

          {/* Protected Routes */}
         <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          } 
        />
          <Route 
            path="/AllCourses" 
            element={
              <ProtectedRoute>
                <AllCourses />
              </ProtectedRoute>
            } 
          />
             <Route 
            path="/Roadmap" 
            element={
              <ProtectedRoute>
                <WebRoadmap />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Frontend" 
            element={
              <ProtectedRoute>
                <FrontendCourses />
              </ProtectedRoute>
            } 
          />
             <Route 
            path="/Backend" 
            element={
              <ProtectedRoute>
                <BackendCourses />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Web3Courses" 
            element={
              <ProtectedRoute>
                <Web3Courses />
              </ProtectedRoute>
            } 
          />

          {/* Fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App



