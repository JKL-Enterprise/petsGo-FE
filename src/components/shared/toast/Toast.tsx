import { toast } from 'react-toastify'

export const Toast = (type: typeof toast | string, text: string) => {
  // @ts-ignore
  return toast[type](text, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
}
