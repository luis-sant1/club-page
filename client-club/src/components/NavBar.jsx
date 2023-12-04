import { useState , useEffect} from "react";
import { useNavigate, Link } from "react-router-dom"
export default function NavBar() {
    const [isReadyForInstall, setIsReadyForInstall] = useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
            // Prevent the mini-infobar from appearing on mobile.
            event.preventDefault();
            console.log("👍", "beforeinstallprompt", event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden' class from the install button container.
            setIsReadyForInstall(true);
        });
    }, []);
    async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          console.log("oops, no prompt event guardado en window");
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
      }
    const navigate = useNavigate()
    const toHome = () => {
        navigate("/*")
        // window.location.href = "/*"
    }
    const toLogin = () => {
        navigate("/login")
    }
    return (
        <div className="w-full h-14 bg-[rgba(230,230,230,1)] flex fixed z-10">
            <div className="grid justify-self-start  pt-1 pb-3  w-52">
                <button
                    onClick={toHome}
                    className="logo font-semibold text-5xl text-[rgba(95,111,82,1)] ">Canaima</button>
            </div>

            <div className="flex w-full justify-end pr-8 font-light text-2xl">

                <>
                    <Link to='#info' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Acerca de</Link>
                    <Link to='#sports' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Deportes</Link>
                    <Link to='#rest' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Restaurantes</Link>
                    <Link to='#salons' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Salones</Link>
                    <Link to='#events' className="hidden md:flex p-3 font-light text-lg lg:text-2xl cursor-pointer relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 ">Eventos</Link>
                </>

                <div className="pt-2 pl-5">
                    <button
                        onClick={toLogin}
                        className='font-light bg-[rgba(95,111,82,1)] w-32 h-10 text-white text-2xl'>Iniciar Sesión</button>

                    {
                        isReadyForInstall &&
                        <button
                            onClick={downloadApp}
                            className='font-light bg-[rgba(95,111,82,1)] w-32 h-10 text-white text-2xl'>Descargar
                        </button>
                    }
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Qwitcher+Grypen:wght@400;700&display=swap');
            </style>
        </div>

    )
}