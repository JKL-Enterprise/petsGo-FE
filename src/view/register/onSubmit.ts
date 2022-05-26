import { userService } from '../../services/userServices/user.service'
import { registerFormModel } from '../../models/forms'

export const onSubmit = async (values: registerFormModel) => {
  const response = await userService.registration(values)
  console.log(response)
}
