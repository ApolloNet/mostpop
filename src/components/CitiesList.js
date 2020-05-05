import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from '../config'
import CitiesListItem from './CitiesListItem'

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired
}

const ListContainer = styled.div`
  flex-basis: 30%;
  height: 100vh;
  overflow-y: auto;
  padding: 1rem;
`

const List = styled.ul`
  margin: 0 0 1rem 0;
  padding: 0;
  list-style: none;
`

const Pagination = styled.div`
  margin: 0 0 1rem 0;
`

function CitiesList ({ cities, changeCity }) {
  const [begin, setBegin] = useState(0)
  const [citiesSlice, setCitiesSlice] = useState([])

  function handlePagination (cities, plusminus) {
    const newBegin = begin + plusminus * config.offset
    const newEnd = newBegin + config.offset
    if (newBegin < 0 || newEnd > config.max) {
      return
    }
    const newSlice = cities.slice(newBegin, newEnd).map(city => {
      return <CitiesListItem
        city={city}
        changeCity={handleCityChange}
        key={city.rank}
      />
    })
    setBegin(newBegin)
    setCitiesSlice(newSlice)
  }

  function handleCityChange (city) {
    changeCity(city)
  }

  useEffect(() => {
    handlePagination(cities, 0)
  }, [cities])

  return <ListContainer>
    <h1>US largest cities</h1>
    <p className="">Click below to display on the map.</p>
    <List data-testid="CitiesList">
      {citiesSlice}
    </List>
    <Pagination>
      <button onClick={() => handlePagination(cities, -1)}>&laquo; Prev</button>
      <button onClick={() => handlePagination(cities, +1)}>Next &raquo;</button>
    </Pagination>
  </ListContainer>
}

export default CitiesList
