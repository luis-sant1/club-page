import "./modal.css"
import { useAuth } from "../context/AuthContext"
const Modal = ({onClose}) => { // Función que maneja la toast-page
    const {showModal} = useAuth()
    console.log()
    return (
        <div className="inset-0 bg-black fixed bg-opacity-30 backdrop-blur-sm z-[100]">
            <button
            onClick={onClose}
            >X</button>
            <div
                className="w-80 mx-auto my-auto align-middle"
            >
                <img src={showModal.restaurant?.imagen?.[0]?.secure_url} alt="" />
            </div>
        </div>
    )
}
export default Modal