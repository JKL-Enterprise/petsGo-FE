import React from 'react'
import './Checkbox.scss'
import { Field } from 'formik'
import { FieldAttributes } from 'formik/dist/Field'

interface CheckboxProps {
  type: 'checkbox' | 'radio'
  name: string
  value: string
}

export const Checkbox = ({ type, name, value }: CheckboxProps) => {
  return (
    <div>
      <Field name={name} type={type} value={value}>
        {({ field }: FieldAttributes<any>) => (
          <label className="checkboxContainer">
            {value}
            <input type={type} value={value} {...field} />
            <span className="checkmark" />
          </label>
        )}
      </Field>
    </div>
  )
}
