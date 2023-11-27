
export default function NavBar() {

    return (
        <div className="w-full h-14 bg-[rgba(230,230,230,1)] flex fixed z-10">
            <div className="grid justify-self-start  pt-1 pb-3  w-52">
                <button
                    
                    className="logo font-semibold text-5xl text-[rgba(95,111,82,1)] ">Canaima</button>
            </div>

            <div className="flex w-full justify-end pr-8 font-light text-2xl">
               
                        <>
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Acerca de</a>
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Deportes</a>
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Restaurantes</a>   
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Salones</a> 
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Eventos</a> 
                        </>
                 
                <div className="pt-2 pl-5">
                    <button
                        
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