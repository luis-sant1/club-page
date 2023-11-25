import Restaurant from "./Restaurant"

export default function DataRestaurant() {
    const data = [
        {
            "type": "Restaurant 1",
            "promo": "Restaurant espacializado en mariscos",
            "link": "",
            "img": "https://www.hotelabelux.com/themes/demo/assets/images/triple.jpg"
        },
        {
            "type": "Restaurant 2",
            "promo": "Restaurant espacializado en cortes de carne",
            "link": "",
            "img": "https://images.hola.com/imagenes/decoracion/20230425230358/dormitorios-inspirados-en-habitaciones-hoteles-am/1-237-28/habitaciones-hotel-5a-a.jpg"
        },
        {
            "type": "Restaurant 3",
            "promo": "Restaurant espacializado en comida rapida",
            "link": "",
            "img": "https://hotelhumberto.com.mx/img/site/vista-habitaciones/4-personas-2.jpg"
        },
        {
            "type": "Restaurant 4",
            "promo": "Restaurant espacializado en tapas y cocteles",
            "link": "",
            "img": "https://bestlocationhotels.com/wp-content/uploads/2019/04/TRYP-by-Wyndham-Times-Square-South.jpg"
        },
    ]
    return(
        <div className='lg:grid lg:grid-cols-2 '>
                
        
                {
                    data?.map((x, i) => {
                        return ( 
                            <Restaurant  key={i} type={x.type} promo={x.promo} img={x.img}/>
                        )
                    })
                }
                
                
        
    </div>
    )
}