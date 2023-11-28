
export default function Events(props) {
    return (
        <div className="m-7 relative text-white ">
            <img src={props.img}
            className="h-[300px] object-cover w-full"
            alt="" />
            <div className="bg-[rgba(95,111,82,1)] absolute bottom-0 left-0 w-full text-white flex flex-wrap justify-center  group transition-all duration-300 hover:h-[150px] h-[50px]">
                <h2 className="text-2xl p-2 font-light text-white w-full group">{props.name}</h2>
                <p className="text-white font-light pl-2 pb-2 pr-2 hidden top-12 left-0 group-hover:flex">{props.description}<span className="font-bold"></span></p>
                <div className="w-[60px] flex justify-center 	">
                    <p  target="_blank"
                        className="width-[50]"><span className="text-lg relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transitiz on-all after:duration-300 cursor-pointer hidden group-hover:flex ">Ver mas</span>
                    </p>
                </div>
            </div>


            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
} 