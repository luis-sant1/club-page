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
                <div ref={ref} ><h1 className="font-bold pl-5 text-[rgba(95,111,82,1)] text-4xl md:text-7xl md:pl-16 md:pb-0 lg:text-8xl lg:pl-20"  >Acerca de nosotros</h1></div>
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
                            <p className="text-lg font-light pb-5 lg:text-xl">Somos un hotel con una valoración de 5 estrellas ubicado en Tucacas estado Falcón, es pacíficamente en Mar Leon, Tucacas 2055, Falcón, en nuestra ciudad podrás disfrutar de las mejores playas de Venezuela y estamos seguros que podemos asegurar también que son de las mejores del mundo entero. </p>
                            <p className="text-lg font-light pb-7 lg:text-xl">Contamos con 5 tipos de habitaciones distintas que van desde habitaciones matrimoniales, hasta habitaciones para 6 personas, contamos con restaurante, piscina y barras de bebidas, para que tengas una experiencia inolvidable en nuestras instalaciones de Perubiam Hotel Suites, donde tu comodidad y confort es nuestra prioridad.</p>
                        </div>
                        <div className="pt-7 md:w-1/2 md:pt-10 md:pl-10 lg:pl-14">
                            <h1 className="text-3xl font-light pb-5 pl-5 lg:text-4xl">Horarios</h1>
                            <ul className="list-disc pl-16">
                                <li className="font-light text-lg lg:text-xl">Check-in: 1PM</li>
                                <li className="font-light text-lg lg:text-xl">Check-out: 12PM</li>
                                <li className="font-light text-lg lg:text-xl">Piscina: 10AM-10PM</li>
                                <li className="font-light text-lg lg:text-xl">Restaurant: 8AM-11PM</li>
                                <li className="font-light text-lg lg:text-xl">Barra de bebidas: 8AM-11PM</li>
                            </ul>
                            <h1 className="text-3xl font-light pb-5 pt-5 pl-5 lg:text-4xl">Contáctanos</h1>
                            <ul className="list-disc pl-16">
                                <li className="font-light text-lg lg:text-xl">Número de teléfono: 0418-4567-890</li>
                                <li className="font-light text-lg lg:text-xl">Instagram: @prubiam1_hotelsuits</li>
                                <li className="font-light text-lg lg:text-xl">Correo electrónico: perubiamhotelsuits@gmail.com</li>
                                <li className="font-light text-lg lg:text-xl">Subreddit: /perubiam1</li>
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