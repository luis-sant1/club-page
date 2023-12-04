import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeDesing from './HomeDesing';
import { useAuth } from './context/AuthContext';
import { motion } from "framer-motion";
export default function CarouselHome() {
const { showModal } = useAuth()
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
            "img": "https://cccm.mx/wp-content/themes/CCCM/images/dynamic/campo.jpg"
        },
        {
            "img": "https://clubloscortijos.com/site/wp-content/uploads/2020/09/Piscina-semiol%C3%ADmpica-toma-lateral-aerea.jpg?189db0&189db0"
        },
        {
            "img": "https://www.circuloecuestre.es/image/cache/catalog/correspondientes/america/el-salvador/san-salvador/club-campestre-cuscatlan/club-campestre-cuscatlan-1200x840.jpg"
        },
        {
            "img": "https://homesoftherich.net/wp-content/uploads/2015/11/Screen-Shot-2015-11-16-at-1.04.32-PM.png"
        },
        {
            "img": "https://images.adsttc.com/media/images/6027/27e3/f91c/8176/4b00/0347/large_jpg/8.jpg?1613178815"
        }
    ]
    return (

        <div className=''>

            <Carousel
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
             {
                    ...(showModal.show && {arrows : false})
                }
                responsive={responsive}>
                {
                    data?.map((x, i) => {
                        return (
                            <HomeDesing key={i} type={x.type} promo={x.promo} img={x.img} />
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
                    <p className="font-light text-white md:text-2xl lg:w-6/12">Ven y disfruta de nuestros servicios de primera calidad para pasar un día estupendo junto a tus amigos o seres queridos, ¿A qué esperas para conocernos?</p>
                </div>
                </motion.div>
            </div>
        </div>


    )
}