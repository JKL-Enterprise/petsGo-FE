import { toast } from 'react-toastify'

export interface Model {
  firstName: string
  lastName: string
  username: string
  password: string
  role: string
}

export const onSubmit = (values: Model) => {
  toast.success('User created!', {
    theme: 'colored',
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
  console.log(values)
}
