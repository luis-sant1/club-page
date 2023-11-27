import CarruselSalas from "./CarruselSalas";

export default function Salas() {

    return(
        <div className="bg-white dark:bg-gray-900 dark:text-white text-black" id= 'salons'>
            <h1 className='font-bold pl-14 text-[rgba(95,111,82,1)] text-4xl md:text-7xl md:pl-16 md:pb-0 lg:text-8xl lg:pl-20'>Salones</h1>
            <div className='flex w-full h-5/6 bg-[rgba(230,230,230,1)] dark:bg-gray-900' >
                <div className='w-9/12  m-auto pt-10 pb-10 md:pt-10' id= "rooms">
                    
                    <CarruselSalas />
                </div>
                
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>

        </div>
    )
}