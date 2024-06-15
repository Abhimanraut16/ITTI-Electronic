import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Product from './component/Product'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './component/ProductDetail'
import SearchItem from './component/SearchItem'
import Cart from './component/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { items } from './component/Data'
import Footer from './component/Footer'


function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <div>
      <BrowserRouter>

        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />

        </Routes>
        {/* <Product /> */}

<Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App