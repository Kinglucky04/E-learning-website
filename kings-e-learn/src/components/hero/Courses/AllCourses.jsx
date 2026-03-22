// // src/components/hero/Courses/AllCourses.jsx
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import WebRoadmap from './Roadmap'
// import BeginnerCourses from 'web2/BeginnerCourses'
// import FrontendCourses from 'web2/FrontendCourses'
// import BackendCourses from 'web2/BackendCourses'
// import Web3Courses from 'web3/Web3Courses'

// const AllCourses = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         {/* Navigation */}
//         <nav className="bg-white shadow-lg sticky top-0 z-50">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap justify-center gap-4 py-4">
//               <Link to="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
//                 Web Roadmap
//               </Link>
//               <Link to="/beginner" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
//                 Beginner
//               </Link>
//               <Link to="/frontend" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
//                 Frontend
//               </Link>
//               <Link to="/backend" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
//                 Backend
//               </Link>
//               <Link to="/web3" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
//                 Web3
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<WebRoadmap />} />
//           <Route path="/beginner" element={<BeginnerCourses />} />
//           <Route path="/frontend" element={<FrontendCourses />} />
//           <Route path="/backend" element={<BackendCourses />} />
//           <Route path="/web3" element={<Web3Courses />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default AllCourses