import React, { useContext, useEffect } from 'react'
import './Navigation.scss'
import { Button, Toast } from '../index'
import { useTranslation } from 'react-i18next'
import { UserAuthenticationContext } from '../../context/UserAuthenticationProvider'

export const Navigation = () => {
  const { t } = useTranslation()
  const { accessToken, changeAccessToken } = useContext(
    UserAuthenticationContext
  )

  useEffect(() => {
    const accTkn = localStorage.getItem('user')
    changeAccessToken(accTkn || '')
  }, [accessToken])

  const logout = () => {
    localStorage.removeItem('user')
    changeAccessToken('')
    Toast('success', t('toastInfo.logout'))
  }

  return (
    <nav className="navbar flex justify-between items-center">
      <Button path="/" name="PetsGo" variant="text" type="link" />
      {accessToken.length > 0 ? (
        <Button
          name={t('userCreateForm.logout')}
          type="button"
          onClick={logout}
        />
      ) : (
        <div className="flex gap-5">
          <Button
            path="/login"
            name={t('userCreateForm.login')}
            variant="outlined"
            type="link"
          />
          <Button
            path="/register"
            name={t('userCreateForm.register')}
            type="link"
          />
        </div>
      )}
    </nav>
  )
}
