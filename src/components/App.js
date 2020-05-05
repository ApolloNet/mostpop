import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CitiesList from './CitiesList'
import CitiesMap from './CitiesMap'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
`

function App () {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState({})

  function handleCityChange (city) {
    setCity(city)
  }

  useEffect(() => {
    axios.get('/cities.json')
      .then(res => setCities(Object.values(res.data)))
      .catch(err => console.error(err))
  }, [])

  return (
    <Wrapper className="main-content">
      <CitiesList cities={cities} changeCity={handleCityChange} />
      <CitiesMap city={city} />
    </Wrapper>
  )
}

export default App
