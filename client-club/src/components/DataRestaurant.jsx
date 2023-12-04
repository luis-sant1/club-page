import { useEffect, useState } from "react"
import Restaurant from "./Restaurant"
import { getAllRest } from "../api/requests"
export default function DataRestaurant() {
    const [data, setData] = useState([])
    useEffect(()=> {
        const fetchRest = async () => {
            try {
                const res = await getAllRest()
                setData(res.data.restaurants)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRest()
    }, [])
    console.log(data)
    return(
        <div className='lg:grid lg:grid-cols-2 '>
                
        
                {
                    data?.map((x, i) => {
                        return ( 
                            <Restaurant  key={i} name={x.name} description={x.description} img={x.imagen}/>
                        )
                    })
                }
                
                
        
    </div>
    )
}