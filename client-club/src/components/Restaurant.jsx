import { useAuth } from "./context/AuthContext"
export default function Restaurant(props) {
    const {setShowModal} = useAuth()
    return(
        <div className=" grid grid-cols-1 justify-items-center pb-10  ">
            <div className="grid grid-cols-2 w-full  md-pl-5 ">
                <div className="md:ml-10">
                <img 
                className="w-[100%] h-52 lg:h-60"
                src={props.img?.[1]?.secure_url} alt="" />
                </div>
                <div className="grid place-content-center pl-0 bg-[rgba(230,230,230,1)] pr-2 md:mr-10 ">
                    <div className="pl-2" >
                        <h2 className="text-xl font-light border-b border-black">{props.name}</h2>
                        <p className="font-light text-sm md:text-base pt-5 md:pt-7 md:pb-3">{props.description}</p>
                        <div className="flex justify-center">
                        <button 
                        onClick={()=> {setShowModal(true)}}
                        className="text-center"><span className=" text-lg relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Ver menú</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
        </style>
    </div>
    )
}