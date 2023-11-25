import CarruselDeport from "./CarruselDeport";

export default function Deportes() {
    return(

    <div className='w-full h-full pt-10 pb-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 dark:bg-gray-800 dark:text-white text-black bg-white' id ="beachs">
        <h1 className='font-extralight pl-14 text-4xl md:text-6xl md:pl-16 md:pb-10 lg:text-7xl lg:pl-20'>Deportes</h1>
        <div className='flex w-full h-5/6 bg-[rgba(230,230,230,1)] pt-10 pb-5 lg:pb-10 dark:bg-gray-900' >
            <div className='w-11/12 overflow-hidden m-auto'>
                
                <CarruselDeport/>
            </div>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
        </style>
    </div>

    )
}