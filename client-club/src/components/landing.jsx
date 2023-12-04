import Home from './Home'
import Deportes from './Deportes'
import Restaurantes from './Restaurantes'
import Salas from './Salas'
import Info from './Info'
import Eventos from './Eventos'
export default function Landing() {
    return(
        <div>
            {/* El modal */}
            
            <Home/>
            <Deportes/>
            <Restaurantes />   
            <Salas/>
            <Info/>
            <Eventos />
        </div>
    )
}