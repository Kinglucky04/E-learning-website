import React from 'react'
import './header.css'


function Header() {
  return (
    <div className='header-bg'>
      <div className='container mx-auto px-2 sm:px-4 py-2 sm:py-2'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-8'>
          <div className='flex items-center justify-between sm:justify-start'>
            <div className='relative group'>
              <h2 className='text-sm uppercase sm:text-2xl font-bold tracking-wider bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Kings E-Learn
              </h2>
              <p className='absolute left-0 top-full text-xs text-gray-400 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap sm:hidden md:block'>
                Learn like a King, rule your world
              </p>
            </div>
            
            {/* Mobile Menu Toggle - Optional */}
            <button className='sm:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center Section - Search & Explore (Responsive) */}
       <div className='w-full sm:w-auto sm:flex-1 sm:max-w-md md:max-w-lg'>
    <div className='relative flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-full p-1.5 sm:p-1 border border-white/10 hover:border-white/20 transition-all duration-300'>
        
        {/* Search Input */}
        <div className='flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 flex-1 bg-white/5 sm:bg-transparent rounded-md sm:rounded-full'>
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
            type="text" 
            placeholder="Search..." 
            className='bg-transparent text-white placeholder-gray-400 focus:outline-none py-1.5 sm:py-1.5 w-full text-xs sm:text-sm'
        />
        </div>
        
        {/* Divider - Hidden on mobile */}
        <div className='hidden sm:block h-5 w-px bg-white/20'></div>
        
        {/* Explore Button */}
        <button className='hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-1 text-white hover:text-purple-300 transition-colors duration-200 font-medium text-xs sm:text-sm bg-purple-500/20 sm:bg-transparent rounded-md sm:rounded-full'>
          Explore
        </button>
    </div>
    </div>

          {/* Right Section - Auth Buttons (Responsive) */}
          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 ml-4 cursor-pointer p-2 hover:bg-white/10 rounded-full transition-all duration-200">
              <img 
                src="../public/pfp-1.jpeg" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border-2 border-white/20"
              />
              <span className="text-white text-sm font-medium">Lucky Pam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
