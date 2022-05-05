export interface Model {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

export const onSubmit = (values: Model) => {
  console.log(values)
}
