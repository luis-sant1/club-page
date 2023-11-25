
export default function NavBar() {

    return (
        <div className="w-full h-14 bg-[rgba(230,230,230,1)] flex fixed z-10">
            <div className="grid justify-self-start pl-8 pt-3 pb-3  w-52">
                <button
                    
                    className="font-light text-2xl">El logo</button>
            </div>

            <div className="flex w-full justify-end pr-8 font-light text-2xl">
               
                        <>
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl">Acerca de</a>
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl">Deportes</a>
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl">Restaurantes</a>   
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl">Salones</a> 
                            <a to='#' className="hidden md:flex p-3 font-light text-2xl">Eventos</a> 
                        </>
                 
                <div className="pt-2 pl-5">
                    <button
                        
                        className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Iniciar Sesión</button>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>

    )
}