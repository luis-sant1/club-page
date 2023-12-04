import "./modal.css"
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../context/AuthContext"
const Modal = ({ onClose }) => { // Función que maneja la toast-page
    const { showModal } = useAuth()
    console.log(showModal.isEvent)
    console.log(showModal.data?.imagen?.[0]?.secure_url)
    return (
        <div className="inset-0 bg-black fixed bg-opacity-30 backdrop-blur-sm z-[100] flex flex-wrap justify-center w-full self-center items-center">
            <div className="flex justify-end pr-10 pt-16 absolute z-10 top-0 right-0 lg:pt-10">
                <button
                    onClick={onClose}
                ><IoMdClose /></button>
            </div>
            {
                showModal.isEvent ?
                <div className="flex justify-center bg-[rgba(230,230,230,1)] w-full self-center items-center md:w-10/12 lg:w-8/12" >
                    <div
                        className=""
                    >
                        <img src={showModal.data?.img?.secure_url} className="w-full h-52 lg:h-72" alt="" />
                        <div className="w-full bg-[rgba(230,230,230,1)] pl-4 pb-3 lg:pl-8 lg:pr-8 lg:pb-8">
                            <h1 className="font-light md:text-6xl">{showModal.data?.name}</h1>
                            <ul className=" font-light">
                                <li className="md:text-xl">{showModal.data?.description}</li>
                                <li className="pt-4 md:text-xl">Zona del evento: {showModal.data?.site}</li>
                                <li className="pt-4 md:text-xl">Fecha de entrada: {showModal.data?.entryDate.split('T').shift()}</li>
                                <li className="pt-4 md:text-xl">Fecha de salida: {showModal.data?.exitDate.split('T').shift()}</li>
                                <li className="pt-4 md:text-xl">Hora de entrada: {showModal.data?.entryHour}</li>
                                <li className="pt-4 md:text-xl">Hora de Salida: {showModal.data?.exitHour}</li>
                            </ul>
                        </div>
                    </div> 
                </div>:

                    <div
                        className="w-80 mx-auto my-auto align-middle md:w-[34rem] "
                    >
                        <img src={showModal.data?.imagen?.[0]?.secure_url} alt="" />
                    </div>

            }

        </div>
    )
}
export default Modal