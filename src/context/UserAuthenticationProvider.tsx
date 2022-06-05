import React, { createContext, useState } from 'react'

interface UserAuthenticationProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface Model {
  accessToken: string
  refreshToken: string
  changeAccessToken: (arg: string) => void
  changeRefreshToken: (arg: string) => void
}

const initialValues: Model = {
  accessToken: '',
  refreshToken: '',
  changeAccessToken: () => {},
  changeRefreshToken: () => {},
}

export const UserAuthenticationContext = createContext(initialValues)

const UserAuthenticationProvider = ({
  children,
}: UserAuthenticationProviderProps) => {
  const [accessToken, setAccessToken] = useState<string>('')
  const [refreshToken, setRefreshToken] = useState<string>('')

  const changeAccessToken = (accessToken: string) => setAccessToken(accessToken)
  const changeRefreshToken = (refreshToken: string) =>
    setRefreshToken(refreshToken)

  return (
    <UserAuthenticationContext.Provider
      value={{
        accessToken,
        refreshToken,
        changeAccessToken,
        changeRefreshToken,
      }}
    >
      {children}
    </UserAuthenticationContext.Provider>
  )
}

export default UserAuthenticationProvider
