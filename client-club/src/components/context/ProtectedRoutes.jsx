import { useEffect } from "react"
import { useAuth } from "./AuthContext"
import { Navigate, Outlet } from "react-router"
export default function ProtectedRoutes () {
    // const navigate = useNavigate()
    
    const {isAuthenticated} = useAuth()  
    console.log(isAuthenticated)
    if(isAuthenticated == null) {
        return null
    }
    return (
        !isAuthenticated ? <Navigate to='/login' replace/> : <Outlet/>
    )
    
    
}