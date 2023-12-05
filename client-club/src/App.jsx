import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom"

import Footer from "./components/Footer"
import Login from "./components/Login"
import SalasView from "./components/SalasView"
import Landing from "./components/landing"
import NavBar from "./components/NavBar"
import ScrollToHashElement from './utils/ScrollToHashElement'
import ScrollToTop from './utils/ScrollToTop'
import Form from './components/Form'
import Modal from "./components/Modal/Modal"
import { useAuth } from "./components/context/AuthContext"
import ProtectedRoutes from './components/context/ProtectedRoutes'
import CreateDeport from './components/CreateDeport'
import CreateRest from "./components/CreateRest"
import  CreateEven  from "./components/CreateEven"
import CreateSalas from './components/CreateSalas'
function App() {
  const { showModal, setShowModal } = useAuth()
  const closeModal = () => {
    setShowModal({ show: false, restaurant: {} })
  }
  return (
    <BrowserRouter>
      {
        showModal.show && <Modal {...showModal} onClose={closeModal} />
      }

      <ScrollToTop />
      <ScrollToHashElement />
      <NavBar />
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/salasview/:id" element={<SalasView />} />
        <Route path="/form/:id" element={<Form />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/create-sport" element={<CreateDeport />} />
          <Route path="/create-rest" element={<CreateRest />} />
          <Route path="/create-event" element={<CreateEven />} />
          <Route path="/create-salon" element={<CreateSalas />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
