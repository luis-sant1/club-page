import { FaFacebookSquare, FaInstagram, FaRedditAlien } from "react-icons/fa";
export default function Footer() {
    return(
        <div className="w-full h-full">
            <div className="">
                <div className="bg-[rgba(230,230,230,1)] dark:bg-gray-900 dark:text-white text-black">
                    <div className="w-full h-5/6 bg-[rgba(230,230,230,1)] dark:bg-gray-900 dark:text-white md:flex ">
                        <div className="pl-8 pt-8 md:w-1/3 md:pl-10 md:pt-12 md:pb-6 lg:pl-20">
                            <p className="logo font-semibold text-[rgba(95,111,82,1)] text-4xl pb-4 md:text-5xl md:pb-6 lg:text-6xl">Canaima</p>
                            <p className="pb-4 md:pb-6"><a href="" className="font-light md:text-xl lg:text-2xl">Acerca de</a></p>
                            <p className="pb-4 md:pb-6"><a href="" className="font-light md:text-xl lg:text-2xl">Brand</a></p>
                            <p className="pb-4 md:pb-6"><a href="" className="font-light md:text-xl lg:text-2xl">Blog</a></p>
                        </div>
                        <div className="pl-8 md:w-1/3 md:border-x md:border-solid md:border-black md:pl-12 md:pt-12 lg:pl-20">
                            <p className="pb-4 md:pb-6"><a href="" className="font-light md:text-xl lg:text-2xl">Política de privacidad</a></p>
                            <p className="pb-4 md:pb-6"><a href="" className="font-light md:text-xl lg:text-2xl">Licencias</a></p>
                            <p className="pb-4 md:pb-6"><a href="" className="font-light md:text-xl lg:text-2xl">Terminos y condiciones</a></p>
                        </div>
                        <div className="pl-8 md:w-1/3 md:pl-10 md:pt-12 lg:pl-20">
                            <p className="pb-4 font-light md:text-xl md:pb-6 lg:text-2xl">Contáctanos</p>
                            <div className="flex pb-4 md:pb-6">
                                <p className=""><FaFacebookSquare className="h-4 w-5 md:h-7 md:w-7 lg:w-10 lg:h-10"/></p>
                                <p><FaInstagram className="h-4 w-5 md:h-7 md:w-7 lg:w-10 lg:h-10"/></p>
                                <p><FaRedditAlien className="h-4 w-5 md:h-7 md:w-7 lg:w-10 lg:h-10"/></p>
                            </div>
                            <p className="pb-4 font-light md:text-xl md:pb-6 lg:text-2xl">perubiamhotelsuits@gmail.com</p>
                        </div>
                        
                    </div>

                    {/* contenedor de los botones de imiciar y cerrar sesion */}
                    {/* <div>
                        <div className="pt-2 pb-1 flex justify-center md:pb-2">
                            <button className="font-light text-xs">Inicia sesión como administrador</button>
                        </div>
                        <div className="pt-2 pb-1 flex justify-center md:pb-2">
                            <button className="font-light text-xs">Logout</button>
                        </div>
                    </div> */}
                    {/* aqui terminan los botones */}

                    <div className="pt-2 pb-4 flex justify-center md:pt-3 md:pb-5">
                        <p className="font-light text-xs">Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}