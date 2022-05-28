import React from 'react'
import axios from 'axios'
import { loginFormModel, registerFormModel } from '../../models/forms'

export const userService = {
  registration: (values: registerFormModel) =>
    axios
      //@ts-ignore
      .post(`${process.env.REACT_APP_API_URL}/user/save`, values)
      .then((response) => response)
      .catch((err) => err),

  login: (values: loginFormModel) => {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(values)) {
      params.append(key, value)
    }

    return (
      axios
        //@ts-ignore
        .post(`${process.env.REACT_APP_API_URL}/login`, params, {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
        .then((response) => response)
        .catch((err) => err)
    )
  },
}
