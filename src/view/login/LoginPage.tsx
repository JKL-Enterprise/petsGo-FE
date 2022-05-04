import React from 'react'
import { Formik } from 'formik'
import { initialValues } from './initialValues'
import { onSubmit } from './onSubmit'
import { validationSchema } from './validationSchema'
import { Button, Input } from '../../components'
import { useTranslation } from 'react-i18next'

export const LoginPage = () => {
  const { t } = useTranslation()
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
              text={t('userCreateForm.email')}
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <Input
              name="password"
              text={t('userCreateForm.password')}
              type="password"
              onChange={handleChange}
              value={values.password}
            />

            <Button
              disabled={isSubmitting}
              name={t('userCreateForm.login')}
              type="submit"
            />
          </form>
        )}
      </Formik>
    </div>
  )
}
