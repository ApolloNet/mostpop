import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CitiesListItem from '../components/CitiesListItem'

test('loads and fires event', () => {
  const city = {
    city: 'New York',
    growth_from_2000_to_2013: '4.8%',
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: '8405837',
    rank: '1',
    state: 'New York'
  }
  const handleCityChange = jest.fn()
  render(<CitiesListItem city={city} changeCity={handleCityChange} />)
  const listItem = screen.getByTestId('CitiesListItem-1')
  fireEvent.click(listItem)
  expect(listItem).toContainHTML('#1 New York, <small>New York</small>')
  expect(handleCityChange).toHaveBeenCalledTimes(1)
})
