import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CitiesList from '../components/CitiesList'
import cities from '../../public/cities.json'

test('loads the list', async () => {
  const handleCityChange = jest.fn()
  render(<CitiesList cities={cities} changeCity={handleCityChange} />)
  const list = screen.getByTestId('CitiesList')
  expect(list).toBeTruthy()
})
