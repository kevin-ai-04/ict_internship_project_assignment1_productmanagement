import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Add from './components/Add'
import ProductTable from './components/ProductTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProductTable/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
    </Routes>
    </>
  )
}

export default App
