import React from 'react'
import { Formik } from 'formik'
import { initialValues } from './initialValues'
import { onSubmit } from './onSubmit'
import { validationSchema } from './validationSchema'
import { Button, Input } from '../../components'

export const LoginPage = () => {
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

            <Button disabled={isSubmitting} name="Login" type="submit" />
          </form>
        )}
      </Formik>
    </div>
  )
}
