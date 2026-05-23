import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>} />  
      </Routes> 
    </div>
  )
}

export default App
