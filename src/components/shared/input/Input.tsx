import React from 'react'
import './Input.scss'

interface InputProps {
  name: string
  text: string
  type?: 'text' | 'number' | 'password' | 'email'
  placeholder?: string
  value: string
  onChange: (props: any) => void
}

export const Input = ({
  name,
  text,
  type = 'text',
  placeholder = text,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="inputContainer">
      <input
        id={name}
        name={name}
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="input_label">
        {text}
      </label>
    </div>
  )
}
