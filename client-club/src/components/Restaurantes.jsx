import DataRestaurant from "./DataRestaurant";

export default function Restaurantes() {
    return(
        <div className="bg-white dark:bg-gray-900 dark:text-white text-black">
        <h1 className='font-bold pl-14 text-[rgba(95,111,82,1)] text-4xl md:text-7xl md:pl-16 md:pb-0 lg:text-8xl lg:pl-20'>Restaurantes</h1>
        <div className='' >
            <div className="">
                
                <DataRestaurant />
            </div>
            
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>

    </div>
    )
}