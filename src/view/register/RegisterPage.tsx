import React from 'react'
import { Formik } from 'formik'
import { Button, CheckboxField, Input } from '../../components'
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
              label={t('userCreateForm.firstName')}
              onChange={handleChange}
              value={values.firstName}
            />
            <Input
              name="lastName"
              label={t('userCreateForm.lastName')}
              onChange={handleChange}
              value={values.lastName}
            />
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
            <div className="flex gap-3">
              <CheckboxField
                type="radio"
                name="role"
                value="sitter"
                label={t('userCreateForm.sitter')}
              />
              <CheckboxField
                type="radio"
                name="role"
                value="searcher"
                label={t('userCreateForm.searcher')}
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
