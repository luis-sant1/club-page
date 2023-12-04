

// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function ButtonEditDe() {

    return(
        <div className="pt-2 pb-2 pl-8">
            <div className=" md:flex justify-center">
                <div className=' grid justify-items-center mb-1 pr-1 md:pr-0  lg:w-1/2'>
                    <button type="" className='font-light bg-[rgba(95,111,82,1)] w-20 h-6 text-white text-base md:mr-1 '>Editar</button>
                </div>
                <div className=' grid justify-items-center pb-1 pr-1 md:pr-0 lg:w-1/2'>
                    <button type="" className='font-light bg-[rgba(95,111,82,1)] w-20 h-6 text-white text-base md:ml-1 '>Eliminar</button>
                </div>
                <div className=' grid justify-items-center   pr-1 md:pr-0 lg:w-1/2'>
                    <Link to= '/form/id' type="" className='font-light bg-[rgba(95,111,82,1)] w-20 h-6 text-white text-base md:ml-1 text-center'>Reservar</Link>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}