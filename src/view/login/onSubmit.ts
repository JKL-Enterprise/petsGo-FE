import { userService } from '../../services/userServices/user.service'
import { loginFormModel } from '../../models/forms'

export const onSubmit = (values: loginFormModel) => {
  userService.login(values)
}
