import { useNavigate } from "react-router"
import { useAuth } from "./context/AuthContext"
export default function ButtonRest() {
    const { adminAuth } = useAuth()
    const navigate = useNavigate()
    const handleCreate = () => {
        navigate('/create-rest')
    }
    if (adminAuth) {
        return (
            <div className="">
                <p className="font-light text-3xl text-center pb-5 mb:text-4xl">Crear Restaurante</p>
                <div className="flex justify-center pb-3">

                    <div className='pt-5 grid justify-items-center '>
                        <button onClick={handleCreate} type="" className='font-light bg-[rgba(95,111,82,1)] w-32 h-10 text-white text-2xl'>Crear</button>
                    </div>
                </div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>
        )
    }
}