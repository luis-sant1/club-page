import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Events from './Events';
import { useState, useEffect } from 'react';
import { getAllEvents } from '../api/requests';
import { useAuth } from './context/AuthContext';
export default function CarruselEventos() {
    const { showModal } = useAuth()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await getAllEvents()
                setData(res.data.events)
            } catch (error) {
                console.log(error)
            }
        }
        fetchEvents()
    }, [])
    console.log(data)
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
    return (


        <div className='w-fulloverflow-hidden m-auto'>

            <Carousel
                {
                ...(showModal && { arrows: false })
                }
                responsive={responsive}>
                {
                    data?.map((x, i) => {
                        return (
                            <Events key={i} name={x.name} site={x.site} description={x.description} img={x.img} entryDate={x.entryDate} exitDate={x.exitDate} entryHour={x.entryHour} exitHour={x.exitHour} />
                        )
                    })
                }

            </Carousel>
        </div>


    )
}