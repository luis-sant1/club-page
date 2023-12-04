import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Salones from './Salones';
import { useState, useEffect } from 'react';
import { getAllSalons } from '../api/requests';
import { useAuth } from './context/AuthContext';
export default function CarruselSalas() {
    const [salons, setSalons] = useState([])
    const { showModal } = useAuth()
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
    useEffect(() => {
        const fetchsSalons = async () => {
            try {
                const res = await getAllSalons()
                setSalons(res.data?.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchsSalons();
    }, [])

    return (

        <div className='w-full  m-auto pt-3 pb-3  '>

            <Carousel
                {
                ...(showModal.show && { arrows: false })
                }
                responsive={responsive}>
                {
                    salons?.map((x, i) => {
                        return (
                            <Salones key={i} name={x.nombre} descripcion={x.descripcion} img={x.imagen} id={x._id}
                            />
                        )
                    })
                }


            </Carousel>
        </div>


    )
}