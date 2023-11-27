import { useNavigate } from "react-router-dom"

export default function Salones (props){
    const navigate = useNavigate()
    const handleSeeMore = () => {
        navigate('/salasview')
    }
    return(
        <div className="m-0 w-full h-full group md:pr-3 flex text-center">
            <div className=" hover:bg-black w-full h-full ">
            <img 
            className="h-[80vh] group-hover:bg-black relative object-cover "
            src={props.img} alt="" />
            </div>
            <div className="hover:bg-black w-full z-50 h-full absolute opacity-70 md:w-[96%] lg:w-[97.5%]">
            <div className="absolute z-10 hidden group-hover:block m-auto left-0 right-0 top-[40%] text-white " >
                <h2 className="text-xl font-light">{props.type}</h2>
                <button
                onClick={handleSeeMore}
                className=""><span className="text-lg relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Ver mas</span></button>
                <p className="font-light">{props.promo}</p>
            </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}