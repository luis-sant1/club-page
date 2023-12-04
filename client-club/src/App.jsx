import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom"

import Footer from "./components/Footer"
import Login from "./components/Login"
import SalasView from "./components/SalasView"
import Landing from "./components/landing"
import NavBar from "./components/NavBar"
import ScrollToHashElement from './utils/ScrollToHashElement'
import ScrollToTop from './utils/ScrollToTop'
import Test from './components/Test'
import Form from './components/Form'
import Modal from "./components/Modal/Modal"
import { useAuth } from "./components/context/AuthContext"
function App() {
  const {showModal, setShowModal} = useAuth()
  return (
    <BrowserRouter>
    {
      showModal && <Modal onClose = {()=> {
        setShowModal(false)
      }}/>
    }
      
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
