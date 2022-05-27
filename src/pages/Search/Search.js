import React, { useState, useEffect } from 'react'
import { Row, Col, Input } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

// Components
import MovieCatalog from '../../components/MovieCatalog'
import Footer from '../../components/Footer'

// Utils
import { URL_API, API } from '../../utils/Constants'

import './Search.scss'

export default function Search(props) {
  const location = useLocation() // Me permite acceder a la localización actual
  const navigate = useNavigate() // Me permite modificar la ruta en tiempo real 

  const [ movieList, setMovieList ] = useState(0)
  const [ searchValue, setSearchValue ] = useState(null)

  useEffect(() => {
    ( async () => {
      const searchValue = queryString.parseUrl(location.search)
      const { query: { s }} = searchValue
      const response = await fetch(`${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`)
      const movies = await response.json()
      setSearchValue(s)
      setMovieList(movies)
    })()
  }, [location.search])

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search)
    urlParams.s = e.target.value
    console.log(queryString.stringify(urlParams)) // Convertir a String el urlParams
    navigate(`?${queryString.stringify(urlParams)}`)
    setSearchValue(e.target.value)
  }

  return (
    <Row>
      <Col span={12} offset={6} className='search'>
        <h1>Busca tu película</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      { movieList.results && (
        <Row>
          <Row span={24}>
            <MovieCatalog movies={movieList} />
          </Row>
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}