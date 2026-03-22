import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FaUser, FaLock, FaGoogle, FaApple } from 'react-icons/fa';

function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(!identifier || !password) return; 
    
    login(identifier, identifier); 
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-blue-900">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 uppercase">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm">
              Sign in to continue your learning journey
            </p>
          </div>

          <form className="space-y-5 " onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email or Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                  type="text" 
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter your email or username"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
              </div>
            </div>


            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm flex-wrap gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors p-4 w-18 h-12 cursor-pointer">
              <FaGoogle className="text-red-500 text-lg" />
            </button>
          </div>

         <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login