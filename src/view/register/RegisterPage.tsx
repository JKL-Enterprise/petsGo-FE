import React from 'react'
import { Formik } from 'formik'
import { Button, CheckboxField, Input } from '../../components'
import { validationSchema } from './validationSchema'
import { initialValues } from './initialValues'
import { useTranslation } from 'react-i18next'
import { registerFormModel } from '../../models/forms'
import { userService } from '../../services/userServices/user.service'
import { Toast } from '../../components'

export const RegisterPage = () => {
  const { t } = useTranslation()

  const onSubmit = async (values: registerFormModel) => {
    const response = await userService.registration(values)
    if (response?.status === 200)
      Toast('success', t('toastInfo.register.registered'))
    else if (response?.response.status === 500)
      Toast('info', t('toastInfo.register.alreadyExist'))
    else Toast('error', t('toastInfo.serverError'))
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-3"
          >
            <Input
              name="firstName"
              label={t('userCreateForm.firstName')}
              onChange={handleChange}
              value={values.firstName}
              error={errors.firstName && touched.firstName}
            />
            <Input
              name="lastName"
              label={t('userCreateForm.lastName')}
              onChange={handleChange}
              value={values.lastName}
              error={errors.lastName && touched.lastName}
            />
            <Input
              name="username"
              label={t('userCreateForm.username')}
              onChange={handleChange}
              value={values.username}
              error={errors.username && touched.username}
            />
            <Input
              name="password"
              label={t('userCreateForm.password')}
              type="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password && touched.password}
            />
            <div className="flex gap-3">
              <CheckboxField
                type="radio"
                name="role"
                value="PET_SITTER"
                label={t('userCreateForm.sitter')}
              />
              <CheckboxField
                type="radio"
                name="role"
                value="PET_SEARCHER"
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
