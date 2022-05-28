import React from 'react'
import { Formik } from 'formik'
import { initialValues } from './initialValues'
import { validationSchema } from './validationSchema'
import { Button, Input } from '../../components'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { UserUserAuthenticationContext } from '../../context/UserAuthenticationProvider'
import { loginFormModel } from '../../models/forms'
import { userService } from '../../services/userServices/user.service'
import { Toast } from '../../components/shared/toast/Toast'

export const LoginPage = () => {
  const { t } = useTranslation()
  const { changeAccessToken, changeRefreshToken } = useContext(
    UserUserAuthenticationContext
  )

  const onSubmit = async (values: loginFormModel) => {
    const response = await userService.login(values)
    if (response?.status === 200) {
      Toast('success', 'Logged')
      changeAccessToken(response.data?.access_token)
      changeRefreshToken(response.data?.refresh_token)
    } else Toast('error', 'Server fetch error')
  }

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
