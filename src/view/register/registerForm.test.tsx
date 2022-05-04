import '@testing-library/jest-dom'
import { RegisterPage } from './RegisterPage'
import { render } from '@testing-library/react'

describe('Register form tests', () => {
  it('Render form component', () => {
    const { getByText } = render(<RegisterPage />)
    expect(getByText(/Register/i)).toBeInTheDocument()
  })
})
