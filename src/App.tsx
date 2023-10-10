import React from 'react'
import './scss/main.scss'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import 'normalize.css'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

function App() {
  //TODO get session id to show home or show login instead
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
