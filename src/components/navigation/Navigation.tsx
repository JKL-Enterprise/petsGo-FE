import React from 'react'
import './Navigation.scss'
import { Button } from '../index'

export const Navigation = () => {
  return (
    <nav className="navbar flex justify-between items-center">
      <Button path="/" name="PetsGo" variant="text" type="link" />
      <div className="flex gap-5">
        <Button path="/login" name="Login" variant="outlined" type="link" />
        <Button path="/register" name="Register" type="link" />
      </div>
    </nav>
  )
}
