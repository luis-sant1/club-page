import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Depor from './Depor';
import { useEffect, useState } from 'react';
import {getAllSports} from '../api/requests'
export default function CarruselDeport () {
    const [data, setData] = useState([])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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

    // const data = [
    //     {
    //         "name": "Cancha de Futbol",
    //         "decription": "El Parque nacional Morrocoy es un parque nacional ",
    //         "link": "https://es.wikipedia.org/wiki/Parque_nacional_Morrocoy",
    //         "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cocotero_en_Cayo_Sombrero.jpg/800px-Cocotero_en_Cayo_Sombrero.jpg"
    //     },
    //     {
    //         "name": "Cancha de Basquetbol",
    //         "decription": "El Cayo Pescadores​ es una isla pequeña perteneciente ",
    //         "link": "https://es.wikipedia.org/wiki/Cayo_Los_Pescadores",
    //         "img": "https://images.mnstatic.com/79/2f/792fc5e8bcd670b983fa0ce49ab4c65f.jpg"
    //     },
    //     {
    //         "name": "Cancha de Tenis",
    //         "decription": "Es también conocido como la “piscina natural”,",
    //         "link": "https://www.venezuelatuya.com/morrocoy/losjuanes.htm",
    //         "img": "https://media-cdn.tripadvisor.com/media/photo-s/07/6b/da/a7/parque-nacional-morrocoy.jpg"
    //     },
    //     {
    //         "name": "Cancha de Bolas Criollas",
    //         "decription": "Cayo Sombrero1​ es el nombre de una isla del mar ",
    //         "link": "https://www.tripadvisor.es/Attraction_Review-g1931323-d21140457-Reviews-Cayo_Playa_Azul-Tucacas_Central_Western_Region.html",
    //         "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ad/34/82/cayo-playa-azul.jpg?w=1200&h=-1&s=1",
    //         "img": "https://scontent.fmar1-1.fna.fbcdn.net/v/t1.6435-9/121363379_10159075151473885_8842869432001209626_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=810d5f&_nc_ohc=kH_03mcRN98AX8ElfKT&_nc_ht=scontent.fmar1-1.fna&oh=00_AfDDddGbrS9IpWwP9P6Wr72C7G2eOb0JG5Y30mi7KSUQ_w&oe=657CF289"
    //     },
    //     {
    //         "name": "Piscina",
    //         "decription": "Los Cayos de Falcón son una belleza natural de ",
    //         "link": "https://www.tripadvisor.es/Attraction_Review-g1931323-d21140457-Reviews-Cayo_Playa_Azul-Tucacas_Central_Western_Region.html",
    //         "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ad/34/82/cayo-playa-azul.jpg?w=1200&h=-1&s=1"
    //     }
    // ]
    useEffect(()=> {
        const fetchSports = async () => {
            try {
                const res = await getAllSports();
                setData(res.data.sports)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSports()
    }, [])
    console.log(data)
    return(
        <div className='w-fulloverflow-hidden m-auto'>

            <Carousel
                responsive={responsive}>
                {
                    data?.map((x, i) => {
                        console.log(x)
                        return (
                            <Depor key={i} name={x.name} floor={x.floorType} roof={x.roofType} img={x.img} mts2 = {x.mts2} price = {x.price} avaible = {x.avaible} />
                        )
                    })
                }
                
                
            </Carousel>
        </div>
    )
}
