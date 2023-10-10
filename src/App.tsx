import './scss/main.scss'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import 'normalize.css'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
