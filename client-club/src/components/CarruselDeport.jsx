import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Depor from './Depor';
import { useEffect, useState } from 'react';
import {getAllSports} from '../api/requests'
import { useAuth } from './context/AuthContext';
export default function CarruselDeport () {
    const { showModal } = useAuth()
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
    return(
        <div className='w-fulloverflow-hidden m-auto'>

            <Carousel
                {
                    ...(showModal.show && {arrows : false})
                }
                
                responsive={responsive}>
                {
                    data?.map((x, i) => {
                        return (
                            <Depor key={i} name={x.name} floor={x.floorType} roof={x.roofType} img={x.img} mts2 = {x.mts2} price = {x.price} avaible = {x.avaible} />
                        )
                    })
                }
                
                
            </Carousel>
        </div>
    )
}
