import React, { useContext } from 'react'
import { Formik } from 'formik'
import { initialValues } from './initialValues'
import { validationSchema } from './validationSchema'
import { Button, Input } from '../../components'
import { useTranslation } from 'react-i18next'
import { loginFormModel } from '../../models/forms'
import { userService } from '../../services/userServices/user.service'
import { Toast } from '../../components'
import { useNavigate } from 'react-router-dom'
import { UserAuthenticationContext } from '../../context/UserAuthenticationProvider'

export const LoginPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { changeAccessToken } = useContext(UserAuthenticationContext)

  const onSubmit = async (values: loginFormModel) => {
    const response = await userService.login(values)
    if (response?.status === 200) {
      localStorage.setItem('user', response.data.access_token)
      changeAccessToken(response?.data.access_token)
      Toast('success', 'Logged')
      return navigate('/')
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
