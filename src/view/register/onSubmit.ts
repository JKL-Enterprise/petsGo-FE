import { toast } from 'react-toastify'
import { userService } from '../../services/userServices/user.service'
import { registerFormModel } from '../../models/forms'

export const onSubmit = (values: registerFormModel) => {
  userService.registration(values)

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
}
