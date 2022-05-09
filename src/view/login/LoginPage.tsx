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
              name="username"
              label={t('userCreateForm.username')}
              onChange={handleChange}
              value={values.username}
            />
            <Input
              name="password"
              label={t('userCreateForm.password')}
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
