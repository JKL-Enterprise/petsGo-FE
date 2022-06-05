import React from 'react'
import { useTranslation } from 'react-i18next'
import './Input.scss'

interface InputProps {
  name: string
  label: string
  type?: 'text' | 'number' | 'password' | 'email'
  placeholder?: string
  value: string
  onChange: (props: any) => void
  error?: boolean | string
}

export const Input = ({
  name,
  label,
  type = 'text',
  placeholder = label,
  value,
  onChange,
  error,
}: InputProps) => {
  const { t } = useTranslation()
  return (
    <>
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
          {label}
        </label>
      </div>
      {error && (
        <div>
          <p className="input_error"> {t('fields.required')}</p>
        </div>
      )}
    </>
  )
}
