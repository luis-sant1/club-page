import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Events from './Events';
export default function CarruselEventos() {
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
            "name": "Evento 1",
            "decription": "El Parque nacional Morrocoy es un parque nacional ubicado en el litoral más oriental del estado Falcón.",
            "link": "https://es.wikipedia.org/wiki/Parque_nacional_Morrocoy",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cocotero_en_Cayo_Sombrero.jpg/800px-Cocotero_en_Cayo_Sombrero.jpg"
        },
        {
            "name": "Evento 2",
            "decription": "El Cayo Pescadores​ es una isla pequeña perteneciente al Estado Falcón​ en la costa del Mar Caribe de Venezuela.",
            "link": "https://es.wikipedia.org/wiki/Cayo_Los_Pescadores",
            "img": "https://scontent.fmar1-1.fna.fbcdn.net/v/t39.30808-6/269718466_1609475916055101_8804196122539096278_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=34PVxKh95pAAX-5Hz-P&_nc_oc=AQn3TSITGWn5Zd1D3G-N0sBWgsPbClJ1qim2H-ruPBeXS7XsIiLRxU3Fs5jTf3mb7QE&_nc_ht=scontent.fmar1-1.fna&oh=00_AfAwu2fPvfm1UyopZS1ttWO6oauxn0ndZKq_1Vb-rxMpBg&oe=6559DCEA"
        },
        {
            "name": "Evento 3",
            "decription": "Es también conocido como la “piscina natural”, esto se debe a que no posee playas de arenas.",
            "link": "https://www.venezuelatuya.com/morrocoy/losjuanes.htm",
            "img": "https://media-cdn.tripadvisor.com/media/photo-s/07/6b/da/a7/parque-nacional-morrocoy.jpg"
        },
        {
            "name": "Evento 4",
            "decription": "Cayo Sombrero1​ es el nombre de una isla del mar Caribe que pertenece al parque nacional Morrocoy.",
            "link": "https://www.tripadvisor.es/Attraction_Review-g1931323-d21140457-Reviews-Cayo_Playa_Azul-Tucacas_Central_Western_Region.html",
            "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ad/34/82/cayo-playa-azul.jpg?w=1200&h=-1&s=1",
            "img": "https://scontent.fmar1-1.fna.fbcdn.net/v/t1.6435-9/121363379_10159075151473885_8842869432001209626_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=810d5f&_nc_ohc=kH_03mcRN98AX8ElfKT&_nc_ht=scontent.fmar1-1.fna&oh=00_AfDDddGbrS9IpWwP9P6Wr72C7G2eOb0JG5Y30mi7KSUQ_w&oe=657CF289"
        },
        {
            "name": "Evento 5",
            "decription": "Los Cayos de Falcón son una belleza natural de Venezuela, azul y más azul.",
            "link": "https://www.tripadvisor.es/Attraction_Review-g1931323-d21140457-Reviews-Cayo_Playa_Azul-Tucacas_Central_Western_Region.html",
            "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ad/34/82/cayo-playa-azul.jpg?w=1200&h=-1&s=1"
        }
    ]
    return (


        <div className='w-fulloverflow-hidden m-auto'>

            <Carousel
                responsive={responsive}>
                {
                    data?.map((x, i) => {
                        return (
                            <Events key={i} name={x.name} description={x.decription} link={x.link} img={x.img} />
                        )
                    })
                }
                
            </Carousel>
        </div>


    )
}