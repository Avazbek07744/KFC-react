import MilliyTaomlat from './components/MilliyTaomlar'
import Ichimliklar from './components/Ichimliklar'
import FastFood from './components/FastFood'
import Shirinliklar from './components/Shirinliklar'
import ErrorPage from './components/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/milliytaomlar' element={<MilliyTaomlat />} />
        <Route path='/ichimliklar' element={<Ichimliklar />} />
        <Route path='/fast-food' element={<FastFood />} />
        <Route path='/shirinliklar' element={<Shirinliklar />} />
        <Route path='/*' element={<ErrorPage />} />

      </Routes>
    </div>
  )
}

export default App
