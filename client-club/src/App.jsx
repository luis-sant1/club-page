import { BrowserRouter } from "react-router-dom"


import Deportes from "./components/Deportes"
import Eventos from "./components/Eventos"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Info from "./components/Info"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Restaurantes from "./components/Restaurantes"
import Salas from "./components/Salas"
import SalasView from "./components/SalasView"



function App() {

  return (
    <BrowserRouter>
      {/* <Footer/> */}
      {/* <Deportes/> */}
      {/* <Salas/> */}
      {/* <Restaurantes/> */}
      {/* <Info/> */}
      {/* <SalasView/> */}
      {/* <Home/> */}
      {/* <NavBar/> */}
      {/* <Eventos/> */}
      <Login/>
    </BrowserRouter>
    
  )
}

export default App
