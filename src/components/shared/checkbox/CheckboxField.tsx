import React from 'react'
import './CheckboxField.scss'
import { Field } from 'formik'
import { FieldAttributes } from 'formik/dist/Field'

interface CheckboxProps {
  type: 'checkbox' | 'radio'
  name: string
  value: string
  label: string
}

export const CheckboxField = ({ type, name, value, label }: CheckboxProps) => {
  return (
    <Field name={name} type={type} value={value}>
      {({ field }: FieldAttributes<any>) => (
        <label className="checkboxContainer">
          {label}
          <input type={type} value={value} {...field} />
          <span className="checkmark" />
        </label>
      )}
    </Field>
  )
}
