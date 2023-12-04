import "./modal.css"
import { useAuth } from "../context/AuthContext"
const Modal = ({ onClose }) => { // Función que maneja la toast-page
    const { showModal } = useAuth()
    console.log(showModal.isEvent)
    console.log(showModal.data?.imagen?.[0]?.secure_url)
    return (
        <div className="inset-0 bg-black fixed bg-opacity-30 backdrop-blur-sm z-[100]">
            <button
                onClick={onClose}
            >X</button>
            {
                showModal.isEvent ?
                    <div
                        className="w-full mx-auto my-auto align-middle"
                    >
                        <img src={showModal.data?.img?.secure_url} className="w-60" alt="" />
                        <div className="w-[800px] bg-white">
                            <h1>{showModal.data?.name}</h1>
                            <ul>
                                <li>{showModal.data?.description}</li>
                                <li>{showModal.data?.site}</li>
                                <li>{showModal.data?.entryDate.split('T').shift()}</li>
                                <li>{showModal.data?.exitDate.split('T').shift()}</li>
                                <li>{showModal.data?.entryHour}</li>
                                <li>{showModal.data?.exitHour}</li>
                            </ul>
                        </div>
                    </div> :
                    <div
                        className="w-80 mx-auto my-auto align-middle"
                    >
                        <img src={showModal.data?.imagen?.[0]?.secure_url} alt="" />
                    </div>

            }

        </div>
    )
}
export default Modal