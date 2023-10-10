import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { moviesApi } from './api/api'
import { moviesMock } from './mock/movies'

jest.mock('./api/api', () => ({
  moviesApi: { get: () => ({ data: { results: [] } }) }
}))
jest.mock('axios', () => ({
  get: () => {},
  create: () => {}
}))

test('renders Login link', () => {
  render(<App />)
  const login = screen.getByText(/Login/i)
  expect(login).toBeInTheDocument()
})
