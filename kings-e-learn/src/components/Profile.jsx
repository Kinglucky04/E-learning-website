import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ isOpen, onClose }) {
  const navigate = useNavigate()

    const goToProfile = () => {
    navigate('/profile') // 👈 this must match your route
    onClose()
  }

  return (
    <>
      {/* Profile Dropdown */}
      <div className={`absolute top-full right-0 mt-2 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='space-y-1 py-2 bg-white rounded-lg shadow-xl border border-gray-200 w-56'>
          <li onClick={goToProfile} className='px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors font-medium text-gray-700'>Profile</li>
        </ul>
      </div>
    </>
  )
}

export default Profile