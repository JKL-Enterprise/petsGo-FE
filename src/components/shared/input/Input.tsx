import React from 'react'
import './Input.scss'

interface InputProps {
  name: string
  label: string
  type?: 'text' | 'number' | 'password' | 'email'
  placeholder?: string
  value: string
  onChange: (props: any) => void
}

export const Input = ({
  name,
  label,
  type = 'text',
  placeholder = label,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="inputContainer">
      <input
        name={name}
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="input_label">
        {label}
      </label>
    </div>
  )
}
