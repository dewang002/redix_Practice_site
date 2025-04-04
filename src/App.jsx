import React from 'react'
import Nav from './component/Nav'
import { Routes, Route } from 'react-router-dom'
import AddToBag from './component/AddToBag'
import Home from './component/Home'

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<AddToBag />} />
      </Routes>
    </React.Fragment>
  )
}

export default App