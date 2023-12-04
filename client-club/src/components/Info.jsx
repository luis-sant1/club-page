import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Info() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    
    useEffect(() => {
       if (isInView) {
        mainControls.start("visible")
       }
    }, [isInView])

    return(
        <div className="bg-white  pt-10">
            <motion.div 
                variants={{
                hidden: { opacity: 0 },
                visible: {opacity: 1}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25}}>
                <div ref={ref} ><h1 className="font-bold pl-5 text-[rgba(95,111,82,1)] text-4xl md:text-7xl md:pl-16 md:pb-0 lg:text-8xl lg:pl-20">Acerca de nosotros</h1></div>
            </motion.div>
            <div className="bg-[rgba(230,230,230,1)] w-full h-full  pb-10 md:flex lg:pb-20" id="info">
                <div className="w-11/12 mr-auto ml-auto" >

                    <motion.div 
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {opacity: 1}
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.5}}>
                    <div ref={ref} className="pt-12 md:flex ">
                        <div className="border-b border-bottom-width: 1px; border-black border-solid pl-5 md:w-1/2 md:border-b-0 md:border-r md:pt-10 md:pr-10 lg:pl-14">
                            <p className="text-lg font-light pb-5 lg:text-xl">Somos un Club Campestre con casi un Siglo de historia, siempre brindando la mayor calidad de servicios a nuestros socios para que disfruten de emocionantes o relajantes días junto a sus seres queridos. Estamos orgullosos de nuestra historia y esperamos que usted se convierta en parte de esta. </p>
                            <p className="text-lg font-light pb-7 lg:text-xl">Contamos con los mejores servicios del país en lo que respecta a Canchas para tus deportes favoritos, aunque nuestro orgullo no viene sólo de nuestros servicios en los deportes, sino también en los increíbles eventos que organizamos para que nuestros socios pasen momentos inolvidables sin importar la situación. Además, contamos con restaurantes de la mayor calidad a través del Campo entero, por lo que podrás pasar un Almuerzo o Cena espectacular en nuestras instalaciones. </p>
                        </div>
                        <div className="pt-7 md:w-1/2 md:pt-10 md:pl-10 lg:pl-14">
                            <h1 className="text-3xl font-light pb-5 pl-5 lg:text-4xl">Horarios</h1>
                            <ul className="list-disc pl-16">
                                <li className="font-light text-lg lg:text-xl">Abrimos a las: 7PM</li>
                                <li className="font-light text-lg lg:text-xl">Cerramos a las: 10PM</li>
                                <li className="font-light text-lg lg:text-xl">Piscina: 9AM-9PM</li>
                                <li className="font-light text-lg lg:text-xl">Restaurants: 8AM-10PM</li>
                            </ul>
                            <h1 className="text-3xl font-light pb-5 pt-5 pl-5 lg:text-4xl">Contáctanos</h1>
                            <ul className="list-disc pl-16">
                                <li className="font-light text-lg lg:text-xl">Número de teléfono: 0418-5667-670</li>
                                <li className="font-light text-lg lg:text-xl">Instagram: @club1_canaima</li>
                                <li className="font-light text-lg lg:text-xl">Correo electrónico: clubcampestrecanaima@gmail.com</li>
                                <li className="font-light text-lg lg:text-xl">Subreddit: /CampestreCanaima</li>
                            </ul>
                        </div>
                    </div>
                    </motion.div>
                </div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
                </style>
            </div>
        </div>
    )
}