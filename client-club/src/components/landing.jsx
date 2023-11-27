import NavBar from './NavBar' 
import Home from './Home'
import Deportes from './Deportes'
import Restaurantes from './Restaurantes'
import Salas from './Salas'
import Info from './Info'
import Eventos from './Eventos'
import Footer from './Footer'

export default function Landing() {
    return(
        <div>
            <NavBar/>
            <Home/>
            <Deportes/>
            <Restaurantes/>
            <Salas/>
            <Info/>
            <Eventos/>
            <Footer/>
        </div>
    )
}