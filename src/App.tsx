import React from 'react'
import { Navigation } from './components'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage as Home,
  LoginPage as Login,
  RegisterPage as Register,
} from './view'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import UserUserAuthenticationProvider from './context/UserAuthenticationProvider'

const App = () => {
  return (
    <UserUserAuthenticationProvider>
      <div className="mx-auto w-3/4">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </div>
    </UserUserAuthenticationProvider>
  )
}

export default App
