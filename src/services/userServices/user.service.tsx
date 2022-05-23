import React from 'react'
import axios from 'axios'
import { loginFormModel, registerFormModel } from '../../models/forms'

export const userService = {
  registration: (values: registerFormModel) => {
    axios
      //@ts-ignore
      .post(`${process.env.REACT_APP_API_URL}/user/save`, values)
      .then((resp) => resp)
      .catch((err) => err)
  },

  login: (values: loginFormModel) => {
    axios
      //@ts-ignore
      .post(`${process.env.REACT_APP_API_URL}/login`, values, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
      .then((resp) => resp)
      .catch((err) => err)
  },
}
