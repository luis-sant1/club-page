

export default function HomeDesing (props){

    
    return(
        <div>
            <div className="m-0 w-full h-full group  flex text-center ">
                <img 
                className="h-[80vh] w-[100%]  relative object-cover lg:h-screen "
                src={props.img} alt="" />

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>

        </div>
    )
}