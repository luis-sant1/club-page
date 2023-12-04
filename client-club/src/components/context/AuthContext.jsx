import Cookies from 'js-cookie'
import { createContext, useContext, useState, useEffect } from "react";
import { logout, getAllRest } from "../../api/requests";
import { login, verify } from '../../api/reqCredentials';
export const AuthContext = createContext();
export const useAuth = () => {                           // Usa el contexto 
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth needs a context")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [show, setShow] = useState(true)
    const [user, setUser] = useState(null)
    const [adminAuth, setAdminAuth] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [error, setError] = useState("")
    const [rest, setRest] = useState([])
    const [loadData, setLoadData] = useState(null)
    const [showModal, setShowModal] = useState({show: false, restaurant:{}})
    const signin = async (user) => {
        try {
            console.log(user)
            const res = await login(user)
            console.log(res)
            const userRole = res.data.user.user.role[0].toString()
            console.log(userRole)
            if (userRole === 'admin') {
                setUser(res.data);
                setIsAuthenticated(true);
                return setAdminAuth(true)
            };

            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data.error)
            setError(error.response.data.error)
        }
    }
    const LogOut = async () => {
        try {
            const res = await logout()
            Cookies.remove('token');
            Cookies.remove('rol');
            console.log(res)
            setIsAuthenticated(false)
            window.location.href = "/*"
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {                                                   // TIMER PARA LIMPIAR LOS ERRORES
        if (error != "") {
            const timer = setTimeout(() => {
                setError("")
            }, 5000);
            return () => clearTimeout(timer)                           // Eliminamos después de ejecutar (evita consumo extra de recursos)
        }
    }, [error])
    useEffect(() => {
        const validate = async () => {
            const cookies = Cookies.get()
            // console.log(cookies.token)                                // Revisamos si tenemos cookies
            if (!cookies.token) {
                setAdminAuth(false)                                                                      // Si no hay token
                setIsAuthenticated(false)
                setUser(null)
                return;
            }
            // si existe token en las cookies
            try {
                const res = await verify(cookies.token);             // lo verificamos
                console.log(res)
                if (!res.data) setIsAuthenticated(false)                        // De no serverificado
                if (cookies.rol == "admin") setAdminAuth(true)

                setIsAuthenticated(true);                                       // SI pasa el test del backend..
                setUser(res.data);

            } catch (error) {
                console.log(error)
                setIsAuthenticated(false)                                       // si ocurre un error.
                setUser(null)
            }

        }
        validate(); // EJECUTA
    }, []);
    useEffect(() => {
        const fetchRest = async () => {
            try {
                const res = await getAllRest()
                setRest(res.data.restaurants)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRest()
    }, [])
    return (
        <AuthContext.Provider value={{ //Export 
            setShow,
            show,
            signin,
            LogOut,
            isAuthenticated,
            adminAuth,
            setUser,
            error,
            showModal,
            setShowModal,
            rest
        }}>
            {children}
        </AuthContext.Provider>
    )
}