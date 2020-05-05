import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

CitiesListItem.propTypes = {
  city: PropTypes.object.isRequired,
  changeCity: PropTypes.func.isRequired
}

const ListItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  
  &:focus,
  &:hover {
    background: #eee;
  }
`

function CitiesListItem ({ city, changeCity }) {
  function handleCityChange () {
    changeCity(city)
  }

  return <ListItem
    onClick={handleCityChange}
    data-testid={'CitiesListItem-' + city.rank}
  >
    #{city.rank} {city.city}, <small>{city.state}</small>
  </ListItem>
}

export default CitiesListItem
