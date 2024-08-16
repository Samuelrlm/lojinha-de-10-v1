
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produto from './pages/Produto'
import Cadastrar from './pages/Cadastrar'
import Login from './pages/Login'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Produto />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
