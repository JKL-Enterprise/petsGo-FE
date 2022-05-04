import React from 'react'
import './Navigation.scss'
import { Button } from '../index'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
  const { t } = useTranslation()
  return (
    <nav className="navbar flex justify-between items-center">
      <Button path="/" name="PetsGo" variant="text" type="link" />
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
    </nav>
  )
}
