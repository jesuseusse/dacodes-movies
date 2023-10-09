import React from 'react'
import './scss/main.scss'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import 'normalize.css'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
