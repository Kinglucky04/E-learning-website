import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function LandingPage() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" 
         style={{ backgroundImage: "url('../../public/bg-1.jpg')", backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat" }}>
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-8 border-b border-white/20 mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wider">
              Kings E-Learn
            </h1>
            
            <div className="flex gap-4">
             <a href="#" className="group">
                <FaFacebookF className="w-6 h-6 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
                </a>
              <a href="#" className="group">
                <FaInstagram className="w-6 h-6 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
              </a>
              <a href="#" className="group">
                <FaTwitter className="w-6 h-6 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
              </a>
              <a href="#" className="group">
                <FaYoutube className="w-6 h-6 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-center mt-20 sm:mt-32">
            <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-6 animate-fade-in">
              Welcome to Kings E-Learn
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8">
              Best online learning platform for aspiring tech professionals!
            </p>
            <button onClick={() => {console.log("Button was clicked!"); navigate('/signup')}} className="px-8 py-3 bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage