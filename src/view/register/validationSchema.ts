import * as Yup from 'yup'

export const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
  role: Yup.string().required(),
})
