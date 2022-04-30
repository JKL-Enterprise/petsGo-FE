import React from 'react'
import { Formik } from 'formik'
import { Button, Input } from '../../components'

const initialValues = {
  firstName: '',
  lastName: '',
}

export const RegisterPage = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
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

            <Button disabled={isSubmitting} name="Register" type="submit" />
          </form>
        )}
      </Formik>
    </div>
  )
}
