import { BrowserRouter, Routes, Route } from "react-router-dom"

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
function App() {

  return (
    <BrowserRouter>
      <ScrollToHashElement />
        <NavBar />
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/salasview" element={<SalasView />} />
        </Routes>
        <Footer />
    </BrowserRouter>

  )
}

export default App
