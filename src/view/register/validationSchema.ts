import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  role: Yup.string().required(),
})
