import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/404'
import Shipping from './pages/Shipping'
import AIrCargo from './pages/AirCargo'
import Home from './pages/Home'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aircargo' element={ <AIrCargo /> } />
          <Route path='/shipping' element={ <Shipping /> } />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)
