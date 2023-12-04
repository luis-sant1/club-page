import Restaurant from "./Restaurant"
import { useAuth } from "./context/AuthContext"
export default function DataRestaurant() {
    const {rest} = useAuth()
    return(
        <div className='lg:grid lg:grid-cols-2 '>
                
        
                {
                    rest?.map((x, i) => {
                        return ( 
                            <Restaurant key={i} name={x.name} description={x.description} img={x.imagen} rest = {x}/>
                        )
                    })
                }
                
                
        
    </div>
    )
}