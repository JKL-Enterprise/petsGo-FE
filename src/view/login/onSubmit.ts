import { FormikHelpers } from 'formik'

export interface Values {
  email: string
  password: string
}

export const onSubmit = (
  values: Values,
  { setSubmitting }: FormikHelpers<Values>
) => {
  console.log(values)
  setSubmitting(false)
}
