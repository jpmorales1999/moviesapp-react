import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import NewMovies from './pages/New-Movies'
import Popular from './pages/Popular'
import Search from './pages/Search'
import Movie from './pages/Movie'
import Error404 from './pages/Error404'

// Components

import MenuTop from './components/MenuTop'

function App() {
  const { Header, Content } = Layout
  return (
    <Layout>
      <BrowserRouter>

        <Header style={{zIndex: 1}}>
          <MenuTop />
        </Header>

        <Content>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new-movies' element={<NewMovies />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/search/*' element={<Search />} />
            <Route path='/movie/:id' element={<Movie />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </Content>

      </BrowserRouter>
    </Layout>
  );
}

export default App;
