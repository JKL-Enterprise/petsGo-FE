import { userService } from '../../services/userServices/user.service'
import { loginFormModel } from '../../models/forms'

export const onSubmit = async (values: loginFormModel) => {
  const response = await userService.login(values)
  console.log(response)
}
