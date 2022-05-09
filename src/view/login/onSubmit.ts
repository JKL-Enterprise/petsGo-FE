export interface Model {
  username: string
  password: string
}

export const onSubmit = (values: Model) => {
  console.log(values)
}
