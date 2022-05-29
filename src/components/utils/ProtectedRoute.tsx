import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserAuthenticationContext } from '../../context/UserAuthenticationProvider'

export const ProtectedRoute = () => {
  const { accessToken } = useContext(UserAuthenticationContext)

  if (accessToken !== '') {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
