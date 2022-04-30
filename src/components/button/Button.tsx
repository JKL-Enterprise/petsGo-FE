import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

interface ButtonProps {
  name: string
  variant?: 'outlined' | 'contained' | 'text'
  type?: 'link' | 'button'
  path?: string
  onClick?: () => void
}

export const Button = ({
  name,
  variant = 'contained',
  type = 'button',
  path = '/',
  onClick,
}: ButtonProps) => {
  return (
    <div className="buttonContainer">
      {type === 'link' ? (
        <Link to={path} className={`button ${variant}`}>
          {name}
        </Link>
      ) : (
        <button className={`button ${variant}`} onClick={onClick}>
          {name}
        </button>
      )}
    </div>
  )
}
