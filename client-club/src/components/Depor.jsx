import ButtonEditDe from "./ButtonEditDe";
import { useAuth } from "./context/AuthContext";
import { Link } from "react-router-dom";
export default function Depor(props) {
    const { adminAuth, isAuthenticated } = useAuth()
    return (
        <div className="w-full h-auto">
            <div className="m-7 relative text-white flex flex-col">
                <img src={props.img.secure_url}
                    className="h-[300px] object-cover w-full flex self-start items-start"
                    alt="" />


                <div className="pt-64  h-auto w-10/12 items-center content-center pl-20 flex flex-col md:hidden">
                    <div className="bg-white  absolute bottom-0 left-0 w-full text-white flex flex-wrap self-end items-end  h-72 md:w-8/12">
                        <h2 className="text-2xl p-2 font-light text-black w-full group border-b border-black">{props.name}</h2>
                        <ul className=" pl-5 md:pl-0">
                            {
                                props.floor && <li className="text-black font-light pl-2 pr-2 top-12 left-0 pb-2">Tipo de suelo: {props.floor}</li>
                            }
                            <li className="text-black font-light pl-2 pr-2 top-12 left-0 pb-2">Tipo de techo: {props.roof}</li>
                            <li className="text-black font-light pl-2 pr-2 top-12 left-0 pb-2">Disponible: {props.avaible}</li>
                            <li className="text-black font-light pl-2 pr-2 top-12 left-0 pb-2">Precio por hora: {props.price}$</li>
                        </ul>
                        {
                            adminAuth && <ButtonEditDe />
                        }
                        {
                            isAuthenticated &&
                            <div className=' grid justify-items-center   pr-1 md:pr-0 lg:w-1/2'>
                                <Link to='/form/id' type="" className='font-light bg-[rgba(95,111,82,1)] w-20 h-6 text-white text-base md:ml-1 text-center'>Reservar</Link>
                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className="hidden md:relative  md:pt-10 md:ml-64 md:mr-10 md:h-auto md:flex flex-col lg:ml-56 lg:mr-20">
                <div className="bg-white  absolute bottom-0 left-0 w-full text-white flex flex-wrap self-end items-end  h-56 md:w-11/12 lg:w-[95%] ">
                    <h2 className="text-2xl p-2 font-light text-black w-full group border-b border-black md:pl-5">{props.name}</h2>
                    <ul className=" pl-10 md:pl-0">
                        {
                            props.floor && <li className="text-black font-light pl-8 pr-2 top-12 left-0 pb-2">Tipo de suelo: {props.floor}</li>
                        }
                        <li className="text-black font-light pl-8 pr-2 top-12 left-0 pb-2">Tipo de techo: {props.roof}</li>
                        <li className="text-black font-light pl-8 pr-2 top-12 left-0 pb-2">Disponible: {props.avaible}</li>
                        <li className="text-black font-light pl-8 pr-2 top-12 left-0 pb-2">Precio por hora: {props.price}$</li>
                    </ul>
                    {
                        adminAuth && <ButtonEditDe />
                    }
                    {
                        isAuthenticated &&
                        <div className=' grid justify-items-center   pr-1 md:pr-0 lg:w-1/2'>
                            <Link to='/form/id' type="" className='font-light bg-[rgba(95,111,82,1)] w-20 h-6 text-white text-base md:ml-1 text-center'>Reservar</Link>
                        </div>
                    }

                </div>
            </div>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}