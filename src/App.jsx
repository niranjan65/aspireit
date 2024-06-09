import { useState } from 'react'
import Home from './pages/Home'
import Settings from './components/core/Dashboard/Settings/index.jsx'
import OpenRoute from './components/core/Auth/OpenRoute.jsx'
import PrivateRoute from './components/core/Auth/PrivateRoute.jsx'
import { useSelector } from 'react-redux'
import Navbar from './components/common/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import VerifyEmail from './pages/VerifyEmail.jsx'
import UpdatePassword from './pages/UpdatePassword.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MyProfile from './components/core/Dashboard/MyProfile.jsx'


function App() {
  const { user } = useSelector((state) => state.profile)

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

      <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  

    <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />  


    <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      
      <Route path="dashboard/Settings" element={<Settings />} />


    </Route>



    <Route path="*" element={<h1>Error</h1>} />


    </Routes>

   </div>
  )
}

export default App
