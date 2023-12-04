import { useNavigate, Link } from "react-router-dom"
export default function NavBar() {
    const navigate = useNavigate()
    const toHome = ()=> {
        navigate("/*")
        // window.location.href = "/*"
    }
    const toLogin = () => {
        navigate("/login")
    }
    return (
        <div className="w-full h-14 bg-[rgba(230,230,230,1)] flex fixed z-10">
            <div className="grid justify-self-start  pt-1 pb-3  w-52">
                <button
                    onClick={toHome}
                    className="logo font-semibold text-5xl text-[rgba(95,111,82,1)] ">Canaima</button>
            </div>

            <div className="flex w-full justify-end pr-8 font-light text-2xl">
               
                        <>
                            <Link to='#info' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Acerca de</Link>
                            <Link to='#sports' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Deportes</Link>
                            <Link to='#rest' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Restaurantes</Link>   
                            <Link to='#salons' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Salones</Link> 
                            <Link to='#events' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Eventos</Link> 
                        </>
                 
                <div className="pt-2 pl-5">
                    <button
                        onClick={toLogin}
                        className='font-light bg-[rgba(95,111,82,1)] w-32 h-10 text-white text-2xl'>Iniciar Sesión</button>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Qwitcher+Grypen:wght@400;700&display=swap');
            </style>
        </div>

    )
}