import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeDesing from './HomeDesing';
import { motion } from "framer-motion";
export default function CarouselHome (){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        
    };
    const data = [
        {
            "type": "Habitación matrimonial.",
            "promo": "¡El mejor lugar para vacacionar! 5% de descuento.",
            "link": "",
            "img": "https://www.hotelabelux.com/themes/demo/assets/images/triple.jpg"
        },
        {
            "type": "Habitación para 3 personas.",
            "promo": "¡El mejor lugar para vacacionar! 5% de descuento.",
            "link": "",
            "img": "https://images.hola.com/imagenes/decoracion/20230425230358/dormitorios-inspirados-en-habitaciones-hoteles-am/1-237-28/habitaciones-hotel-5a-a.jpg"
        },
        {
            "type": "Habitación para 4 personas.",
            "promo": "¡El mejor lugar para vacacionar! 10% de descuento.",
            "link": "",
            "img": "https://hotelhumberto.com.mx/img/site/vista-habitaciones/4-personas-2.jpg"
        },
        {
            "type": "Habitación para 5 personas.",
            "promo": "¡El mejor lugar para vacacionar! 5% de descuento.",
            "link": "",
            "img": "https://bestlocationhotels.com/wp-content/uploads/2019/04/TRYP-by-Wyndham-Times-Square-South.jpg"
        },
        {
            "type": "Habitación para 6 personas.",
            "promo": "¡El mejor lugar para vacacionar! 5% de descuento.",
            "link": "",
            "img": "https://es.hotellebayeux.com/usermedia/photo-636567303628543623-2.jpg?dummy=0&h=800"
        }
    ]
    return(
        
            <div className=''>
                
                <Carousel
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    infinite={true}
                    responsive={responsive}>
                        {
                            data?.map((x, i) => {
                                return ( 
                                    <HomeDesing key={i} type={x.type} promo={x.promo} img={x.img}/>
                                )
                            })
                        }
                        
                        
                </Carousel>
                <div className="absolute z-5  m-auto left-0 right-0  top-[30%] text-black text-center md:pl-3 md:pr-3 lg:pt-12" >
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 1, delay: 0.3}}
                >
                    <h2 className="text-4xl font-bold  md:text-6xl text-white">Club Campestre</h2>
                    <h2 className='logo font-semibold text-7xl text-[rgba(95,111,82,1)] pb-8 md:text-8xl lg:pb-12'>Canaima</h2>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 1.5, delay: 1.3}}
                >  
                    <div className='lg:flex lg:justify-center'>
                        <p className="font-light text-white md:text-2xl lg:w-6/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolor quidem optio rerum error ipsam itaque dignissimos excepturi, aspernatur suscipit perspiciatis tenetur ipsa odit minus ex veritatis non praesentium nemo?</p>
                    </div>
                </motion.div>
            </div>
            </div>

            
    )
}