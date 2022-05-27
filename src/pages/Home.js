import React, { Fragment } from 'react'
import useFetch from '../hooks/useFetch'
import { Col, Row } from 'antd'

// Components

import SliderMovies from '../components/SliderMovies'
import MovieList from '../components/MovieList'
import Footer from '../components/Footer'

// Utils

import { URL_API, API } from '../utils/Constants'

export default function Home() {
  const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`)
  const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`)
  const topRaterMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`)

  return (
    <Fragment>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList movies={popularMovies} title="Películas Populares" />
        </Col>
        <Col span={12}>
          <MovieList movies={topRaterMovies} title="Top Mejores Películas Calificadas" />
        </Col>
      </Row>
      <Footer />
    </Fragment>
  )
}
