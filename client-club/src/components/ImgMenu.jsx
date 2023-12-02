import Modal from './Modal/Modal'
import { useModal } from './Modal/useModal'
export default function ImgMenu() {
    const [isOpenAlert, openAlert, closeAlert] = useModal(false);
    const funUpDate=props.funUp.toPageUp // Función que retorna setea los datos, id y la página (update para el caso.)
    return(
        <div>
            <img src="" alt="Imagen del menu" />
        </div>
    )
}