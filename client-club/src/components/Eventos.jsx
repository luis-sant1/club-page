import ButtonEvent from "./ButtonEven";
import CarruselEventos from "./CarruselEventos";

export default function Eventos() {
    return(
        <div className='w-full h-full pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24' id ="events">
            <h1 className='font-bold pl-14 text-[rgba(95,111,82,1)] text-4xl md:text-7xl md:pl-16 md:pb-0 lg:text-8xl lg:pl-20'>Eventos</h1>
            <div className='flex w-full h-5/6 bg-[rgba(230,230,230,1)] pt-10 pb-5 lg:pb-10' >
                <div className='w-11/12 overflow-hidden m-auto'>

                    <CarruselEventos />
                </div>
            </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
        </style>
        <ButtonEvent/>
    </div>
    )
}