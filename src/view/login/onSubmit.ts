export interface Model {
  email: string
  password: string
}

export const onSubmit = (values: Model) => {
  console.log(values)
}
