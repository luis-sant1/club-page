export default function Depor(props) {
    return(
    <div className="w-full h-auto">
        <div className="m-7 relative text-white flex flex-col">
            <img src={props.img}
            className="h-[300px] object-cover w-full flex self-start items-start"
            alt="" />


        <div className="pt-64  h-auto w-10/12 items-center content-center pl-20 flex flex-col md:hidden">
            <div className="bg-brown  absolute bottom-0 left-0 w-full text-white flex flex-wrap self-end items-end justify-center h-auto md:w-8/12">
                <h2 className="text-2xl p-2 font-light text-white w-full group">{props.name}</h2>
                <ul className="list-disc pl-10 md:pl-0">
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                </ul>

            </div>
        </div>

        </div>

        <div className="hidden md:relative  md:pt-10 md:ml-64 md:mr-10 md:h-auto md:flex flex-col lg:ml-56 lg:mr-20">
            <div className="bg-brown  absolute bottom-0 left-0 w-full text-white flex flex-wrap self-end items-end justify-center h-auto md:w-11/12 lg:w-full">
                <h2 className="text-2xl p-2 font-light text-white w-full group">{props.name}</h2>
                <ul className="list-disc pl-10 md:pl-0">
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                    <li className="text-white font-light pl-2 pr-2 top-12 left-0 pb-2">{props.description}</li>
                </ul>

            </div>
        </div>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
    </div>
    )
}