import React from 'react'
import { Formik } from 'formik'
import { Button, Checkbox, Input } from '../../components'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { onSubmit } from './onSubmit'

export const RegisterPage = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-3"
          >
            <Input
              name="firstName"
              text="First Name"
              onChange={handleChange}
              value={values.firstName}
            />
            <Input
              name="lastName"
              text="Last Name"
              onChange={handleChange}
              value={values.lastName}
            />
            <Input
              name="email"
              text="E-mail"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <Input
              name="password"
              text="Password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            <div className="flex gap-3">
              <Checkbox type="radio" name="role" value="Sitter" />
              <Checkbox type="radio" name="role" value="Searcher" />
            </div>
            <Button disabled={isSubmitting} name="Register" type="submit" />
          </form>
        )}
      </Formik>
    </div>
  )
}
