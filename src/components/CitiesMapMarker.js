import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Marker, Popup } from 'react-leaflet'

CitiesMapMarker.propTypes = {
  city: PropTypes.object.isRequired
}

function CitiesMapMarker ({ city }) {
  const markerRef = useRef(null)
  const position = [city.latitude, city.longitude]
  const population = new Intl.NumberFormat('en-US').format(city.population)

  useEffect(() => {
    markerRef.current.leafletElement.openPopup()
  }, [])

  return <Marker ref={markerRef} position={position}>
    <Popup>
      <h1 data-testid="CitiesMapMarker-title">
        #{city.rank} {city.city}, <small>{city.state}</small>
      </h1>
      <p>Population: {population}</p>
      <p>Growth: {city.growth_from_2000_to_2013} from 2000 to 2013</p>
    </Popup>
  </Marker>
}

export default CitiesMapMarker
