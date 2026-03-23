import React from 'react'
import { useState, useEffect, useRef} from 'react'
import { useAuth } from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './header.css'
import MobileMenu from './MobileMenu'
import Profile from './Profile'



function Header({ searchQuery, setSearchQuery }) {
  
  const { user } = useAuth();

  {/* react hooks */}
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef(null)
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false)
    }
  }
  
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
      setIsMenuOpen(false)
    }

    const toggleProfile = () => {
      setIsProfileOpen(!isProfileOpen)
    }

    const closeProfile = () => {
      setIsProfileOpen(false)
    }

  return (
    <div className='header-bg'>
      <div className='container mx-auto px-2 sm:px-4 py-2 sm:py-2'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-8'>
          <div className='flex items-center justify-between sm:justify-start'>
            <div className='relative group'>
              <h2 className='text-sm uppercase sm:text-2xl font-bold tracking-wider bg-blue-400 bg-clip-text text-transparent'>
                Kings E-Learn
              </h2>
              <p className='absolute left-0 top-full text-xs text-gray-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap sm:hidden md:block'>
                Learn like a King, rule your world
              </p>
            </div>
            
            {/* Mobile Menu Toggle - Optional */}
            <button   onClick={toggleMenu} className='sm:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center Section - Search & Explore (Responsive) */}
       <div className='w-full sm:w-auto sm:flex-1 sm:max-w-md md:max-w-lg'>
    <div className='relative flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-full p-1.5 sm:p-1 border border-white/10 hover:border-white/20 transition-all duration-300'>
        <button   onClick={toggleMenu} className='hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1 text-white hover:text-blue-400 transition-colors duration-200 font-medium text-xs sm:text-sm bg-purple-500/20 sm:bg-transparent rounded-md sm:rounded-full cursor-pointer'>
          Explore
        </button>
    </div>
    </div>

          {/* Right Section - Auth Buttons (Responsive) */}
          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 shrink-0">
            <div ref={profileRef} className="hidden sm:flex items-center gap-2 ml-4 cursor-pointer p-2 hover:bg-white/10 rounded-full transition-all duration-200" onClick={toggleProfile}>
              <img 
                src="/pfp-1.jpeg" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border-2 border-white/20"
              />
              <span className="text-white text-sm font-medium">{user?.name || "Student"}</span>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <Profile isOpen={isProfileOpen} onClose={closeProfile} />
    </div>
  )
}
export default Header
