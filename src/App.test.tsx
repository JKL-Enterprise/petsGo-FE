import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('initial test', () => {
  test('renders the component', () => {
    render(<App />)
    const text = screen.getByText('PetsGo')
    expect(text).toBeInTheDocument()
  })

})
