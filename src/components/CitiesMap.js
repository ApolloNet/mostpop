import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Map, TileLayer } from 'react-leaflet'
import config from '../config'
import CitiesMapMarker from './CitiesMapMarker'

CitiesMap.propTypes = {
  city: PropTypes.object
}

const MapContainer = styled.div`
  flex-basis: 70%;
  height: 100vh;
  .leaflet-container {
    height: 100vh;
  }
`

function CitiesMap ({ city }) {
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const attribution = '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
  const position = city.latitude
    ? [city.latitude, city.longitude]
    : [config.latitude, config.longitude]
  const marker = city.latitude ? <CitiesMapMarker city={city} /> : null

  return <MapContainer data-testid="CitiesMap">
    <Map center={position} zoom={config.zoom}>
      <TileLayer url={url} attribution={attribution}/>
      {marker}
    </Map>
  </MapContainer>
}

export default CitiesMap
