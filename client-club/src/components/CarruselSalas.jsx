import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Salones from './Salones';



export default function CarruselSalas (){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
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
        
            <div className='w-full  m-auto pt-10 pb-10 md:pt-16 '>
                
                <Carousel
                    responsive={responsive}>
                        {
                            data?.map((x, i) => {
                                return ( 
                                    <Salones  key={i} type={x.type} promo={x.promo} img={x.img}/>
                                )
                            })
                        }
                        
                        
                </Carousel>
            </div>

            
    )
}