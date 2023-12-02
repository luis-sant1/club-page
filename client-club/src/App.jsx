import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom"

import Deportes from "./components/Deportes"
import Eventos from "./components/Eventos"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Info from "./components/Info"
import Login from "./components/Login"
import SalasView from "./components/SalasView"
import Landing from "./components/landing"
import NavBar from "./components/NavBar"
import ProtectedRoutes from './components/context/ProtectedRoutes'
import ScrollToHashElement from './utils/ScrollToHashElement'
import ScrollToTop from './utils/ScrollToTop'
import Test from './components/Test'
import Form from './components/Form'
function App() {

  // Funcion que se necesita para el modal

  const toPageUp=(page, id, data)=>e=>{ // Función que cambia de vista (editar)
    e.preventDefault()
    window.history.pushState(null,"Create",`/${page}/${id}`) // Crea una pagina con el estado page y el id. 
    setPage(page) // Setea estado
    setID(id) // Guarda id
    setContent(data) // Guarda data del fetch
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <ScrollToHashElement />
      
        <NavBar />
        <Routes>
      
          <Route path="/*" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/salasview/:id" element={<SalasView />} />
          <Route path="/test" element={<Test />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
        <Footer />
    </BrowserRouter>

  )
}

export default App
