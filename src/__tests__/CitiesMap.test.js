import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CitiesMap from '../components/CitiesMap'

test('loads the leaflet map', async () => {
  const city = {
    city: 'New York',
    growth_from_2000_to_2013: '4.8%',
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: '8405837',
    rank: '1',
    state: 'New York'
  }
  render(<CitiesMap city={city} />)
  expect(screen.getByTestId('CitiesMap').firstChild)
    .toHaveClass('leaflet-container')
})
