import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

interface ButtonProps {
  name: string
  variant?: 'outlined' | 'contained' | 'text'
  type?: 'link' | 'button' | 'submit'
  path?: string
  onClick?: (props: any) => void
  disabled?: boolean
}

export const Button = ({
  name,
  variant = 'contained',
  type = 'button',
  path = '/',
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <div className="buttonContainer">
      {type === 'link' ? (
        <Link to={path} className={`button ${variant} `}>
          {name}
        </Link>
      ) : (
        <button
          className={`button ${variant} ${disabled && 'disabled'}`}
          onClick={onClick}
          disabled={disabled}
          type={type === 'submit' ? 'submit' : 'button'}
        >
          {name}
        </button>
      )}
    </div>
  )
}
