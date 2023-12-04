import "./modal.css"
import { useAuth } from "../context/AuthContext"
const Modal = ({onClose}) => { // Función que maneja la toast-page
    return (
        <div className="inset-0 bg-black fixed bg-opacity-30 backdrop-blur-sm z-[100]">
            <button
            onClick={onClose}
            >X</button>
            <div
                className="w-80 mx-auto my-auto align-middle"
            >
                <img src="https://marketplace.canva.com/EAEfNjcKK9Q/1/0/1131w/canva-simple-food-menu-2_2u7yeZ_VM.jpg" alt="" />
            </div>
        </div>
    )
}
export default Modal