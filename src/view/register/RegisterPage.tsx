import React from 'react'
import { Formik } from 'formik'
import { Button, Checkbox, Input } from '../../components'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { onSubmit } from './onSubmit'
import { useTranslation } from 'react-i18next'

export const RegisterPage = () => {
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
              name="firstName"
              text={t('userCreateForm.firstName')}
              onChange={handleChange}
              value={values.firstName}
            />
            <Input
              name="lastName"
              text={t('userCreateForm.lastName')}
              onChange={handleChange}
              value={values.lastName}
            />
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
            <div className="flex gap-3">
              <Checkbox
                type="radio"
                name="role"
                value={t('userCreateForm.sitter')}
              />
              <Checkbox
                type="radio"
                name="role"
                value={t('userCreateForm.searcher')}
              />
            </div>
            <Button
              disabled={isSubmitting}
              name={t('userCreateForm.register')}
              type="submit"
            />
          </form>
        )}
      </Formik>
    </div>
  )
}
