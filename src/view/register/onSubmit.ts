import { FormikHelpers } from 'formik'

export interface Values {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

export const onSubmit = (
  values: Values,
  { setSubmitting }: FormikHelpers<Values>
) => {
  console.log(values)
  setSubmitting(false)
}
