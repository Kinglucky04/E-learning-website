import React from 'react'

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div className={`absolute top-full left-0 right-0 px-4 flex justify-end sm:justify-center ${isOpen ? 'flex' : 'hidden'}`}>
        <ul className='space-y-2 py-2 px-3 bg-gray-50 p-8 rounded-lg text-sm shadow-lg text-gray-500 w-80'>
          <li onClick={onClose} className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Home</li>
          <li onClick={onClose} className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Profile</li>
          <li onClick={onClose} className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>All Courses</li>
          <li onClick={onClose} className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Web2 Courses</li>
          <li onClick={onClose} className='rounded bg-gray-100 cursor-pointer py-3 px-4 hover:bg-gray-200 transition'>Web3 Courses</li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu