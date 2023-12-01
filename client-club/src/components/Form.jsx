import { useForm } from 'react-hook-form'
import { formReq } from '../api/requests'
import { useState } from 'react'
// import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'
import { useAuth } from './context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
export default function Formulario() {
    const {id} = useParams()
    const navigate = useNavigate()
    const {setShow} = useAuth()
    const [error, setError] = useState([])
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const toHome = () => {
        navigate('/')
        setShow(true)
    }

    const onSubmit = handleSubmit(async (values) => {
        try {
            console.log(values)
            const res = await formReq(values, id);
            console.log(res)
            if (res) {
                console.log(values)
                Swal.fire({
                    title: "¡Reservación enviada!",
                    text: "Recibiras un correo de confirmación a: " + values.email,
                    icon: "success",
                    confirmButtonColor: "#9A5832"
                });
                
            }
        } catch (error) {
            console.log(error.response.data.error)
            return setError(error.response.data.error)
        }
        toHome()
    })
        ;
    return (

        <div className='h-full dark:bg-gray-800 pb-56 bg-white'>
            <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 '>
                <form className='grid grid-cols-1 justify-center h-full ' onSubmit={onSubmit} >
                    <label htmlFor="" className='font-light pt-10 mt-[40px] dark:text-white text-black'>Nombre</label>
                    <div className='pt-1'>
                        <input type="text"
                            {...register('name', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='text-black font-light w-full border border-solid border-black grid h-10 p-2' />
                    </div>
                    {
                        errors.name && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1 '>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Primer Apellido</label>
                    <div className='pt-1'>
                        <input type="text"
                            {...register('lastName', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='text-black font-light w-full border border-solid border-black grid h-10 p-2' />
                        {
                            errors.lastName && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>
                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Correo Electronico</label>
                    <div className='pt-1'>
                        <input type="text"
                            {...register('email', { required: true, minLength: 4, maxLength: 90, pattern: /^\S+@\S+\.\S+$/ })}
                            className='text-black font-light w-full border border-solid border-black grid h-10 p-2' />
                    </div>
                    {
                        errors.email && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    <div className='pt-1'>
                        <div className='grid grid-cols-2 pt-1 '>
                            <label htmlFor="" className='font-light dark:text-white text-black'>Fecha y hora de entrada</label>
                            <label htmlFor="" className='font-light dark:text-white text-black'>Fecha y hora de salida</label>
                        </div>

                        <div className='grid grid-cols-2 '>
                            <input type="date"
                                {...register('entryDate', { required: true })}
                                className='text-black font-light h-10 w-8/12 border border-solid border-black p-2' />
                            <input type="date"
                                {...register('exitDate', { required: true })}
                                className='text-black font-light h-10 w-8/12 border border-solid border-black p-2' />
                        </div>
                        {
                            errors.entryDate || errors.exitDate ? (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            ) : ""
                        }
                    </div>


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Número de teléfono</label>
                    <div className='pt-1'>
                        <input type="text"
                            {...register('phone', { required: true, minLength: 9, maxLength: 9, })}
                            className='text-black font-light w-full border border-solid border-black grid h-10 p-2' />
                    </div>
                    {
                        errors.phone && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    <div className='flex pt-4'>
                        <input
                            {...register('check', { required: true })}
                            type="checkbox" className='h-5 w-5' />
                        <div className=''>
                            <label htmlFor="" className='font-light pl-2 dark:text-white text-black'>
                                Acepto los terminos y condiciones.
                            </label>
                        </div>
                    </div>
                    {
                        errors.check && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    {
                        error.map((error, i) => (
                            <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center' >{error.msg}</div>
                        ))
                    }
                    <div className='pt-3 grid justify-items-center mb-4'>
                        <button type="submit" className='font-light bg-[rgba(95,111,82,1)] w-32 h-10 text-white text-2xl'>Reserva</button>
                    </div>
                </form>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}