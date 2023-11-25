import DataRestaurant from "./DataRestaurant";

export default function Restaurantes() {
    return(
        <div className="bg-[rgba(230,230,230,1)] dark:bg-gray-900 dark:text-white text-black">
        <h1 className='font-extralight pl-14 pt-10 pb-5 text-5xl md:text-6xl md:pl-16 md:pb-10 lg:text-7xl lg:pl-20'>Restaurantes</h1>
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