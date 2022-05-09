import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  username: Yup.string(),
  password: Yup.string(),
  role: Yup.string(),
})
