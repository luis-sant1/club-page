import Home from './Home'
import Deportes from './Deportes'
import Restaurantes from './Restaurantes'
import Salas from './Salas'
import Info from './Info'
import Eventos from './Eventos'
import Footer from './Footer'
import ImgMenu from './ImgMenu'
import Modal from './Modal/Modal'
import { useModal } from './Modal/useModal'
import DetailsEvent from './DetailsEvent'

export default function Landing() {

    // Toda la logica es del modal
    // const funUp = props // TRAE FUNCiÓN
    
    // //ESTADOS
    // const [isOpenAlert, openAlert, closeAlert] = useModal(false); // Estado de la venta ver deetalles
    // const [dataDetail, setDataDetail] = useState({}) // Data de la ventana datails.
    // const [products, setProducts] = useState([]); // Arreglo de productos. -Probablmente no lo use x
    // const [productsPerPage, setProductsPerPage] = useState(8) // Productos que se muestran por página
    // const [currentPage, setCurrentPage] = useState(1) // Página actual en la que nos encontramos.


    // const { data, loading, error, total } = useFetch(import.meta.env.VITE_FETCH_ALL); // uso del custom hook useFetch para traer la data.
    // const openDetail = (e, data) => { // Ventana de ver detalles
    //     setDataDetail(data) // Setear la data a la ventana.
    //     openAlert()
    // }

    // const lastIndex = currentPage * productsPerPage; // Calculo de los indeces para retornar la data
    // const firtsIndex = lastIndex - productsPerPage;
    return(
        <div>
            {/* El modal */}
            
            <Home/>
            <Deportes/>
            <Restaurantes /*key={e._id} data={e} openImg={openDetail}*/ />   
            <Salas/>
            <Info/>
            <Eventos /*key={e._id} data={e} openDetail={openDetail}*/ />
        </div>
    )
}