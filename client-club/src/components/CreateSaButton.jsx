import { useNavigate } from "react-router"
export default function CreateSaButton() {
    const navigate = useNavigate()
    const handleCreate = ()=> {
        navigate('/create-rooms')
    }
    return(
        <div className="bg-[rgba(230,230,230,1)]">
            <p className="font-light text-3xl text-center pb-5 mb:text-4xl">Crear Sala</p>
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