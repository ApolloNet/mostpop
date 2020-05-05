import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CitiesMapMarker from '../components/CitiesMapMarker'

test.skip('loads the leaflet marker', async () => {
  const city = {
    city: 'New York',
    growth_from_2000_to_2013: '4.8%',
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: '8405837',
    rank: '1',
    state: 'New York'
  }
  render(<CitiesMapMarker city={city} />)
  expect(screen.getByTestId('CitiesMapMarker-title'))
    .toContainHTML('#1 New York, <small>New York</small>')
})
