import React from 'react'
import { Link } from "react-router-dom";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`absolute top-full left-0 right-0 px-4 flex justify-end sm:justify-center ${isOpen ? 'flex' : 'hidden'}`}>
      <ul className='space-y-2 py-2 px-3 bg-gray-50 p-8 rounded-lg text-sm shadow-lg text-gray-500 w-80'>
        
        <Link to="/AllCourses" onClick={onClose}>
          <li className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>All Courses</li>
        </Link>

        <Link to="/Roadmap" onClick={onClose}>
          <li className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Road Map</li>
        </Link>
        
        <Link to="/Frontend" onClick={onClose}>
          <li className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Frontend Courses</li>
        </Link>

        <Link to="/Backend" onClick={onClose}>
          <li className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Backend Courses</li>
        </Link>

        
        <Link to="/Web3Courses" onClick={onClose}>
          <li className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Web3 Courses</li>
        </Link>
        
      </ul>
    </div>
  )
}

export default MobileMenu