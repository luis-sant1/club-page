import Modal from './Modal/Modal'
import { useModal } from './Modal/useModal'
export default function DetailsEvent() {
    const [isOpenAlert, openAlert, closeAlert] = useModal(false);
    const funUpDate=props.funUp.toPageUp // Función que retorna setea los datos, id y la página (update para el caso.)
    return(
        <div className="bg-[rgba(230,230,230,1)]">
            <div>
                <img src="" alt="Imagen del evento" />
            </div>
            <div>
                <h1>Titulo del evento</h1>
                <p>Descripción del evento</p>
                <p>Zona del evento</p>
                <p>Edades de admisión</p>
                <p>Dia del evento</p>
                <p>Hora del evento</p>
            </div>
        </div>
    )
}