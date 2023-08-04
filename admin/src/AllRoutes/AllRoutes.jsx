import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stats from '../pages/Stats'
import Dashboard from '../pages/Dashboard'
import AddProduct from '../pages/AddProduct'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/stats' element={<Stats />} />
      <Route path='/add-product' element={<AddProduct />} />
      
    </Routes>
  )
}
