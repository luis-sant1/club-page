import { useForm } from 'react-hook-form'
import { createaSport } from '../api/requests'
import Swal from 'sweetalert2'
export default function CreateDeport() {
    const { register, handleSubmit, control, formState: {
        errors
    }} = useForm()
    
    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        const formData = new FormData();
        formData.append("img", values.img[0]);
        formData.append("roofType", values.roofType);
        formData.append("floorType", values.floorType);
        formData.append("mts2", values.mts2);
        formData.append("price", values.price);
        formData.append("name", values.name);
        formData.append("avaible", values.avaible);
        values = { ...values, imagen: values.img[0]};
        
        try {
            await createaSport(formData)
            await Swal.fire({
                title: "Deporte añadido.",
                icon: "success",
                confirmButtonColor: "#9A5832"
            });
            window.location.href = '/*'
            
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Ha ocurrido un error al añadir deporte.",
                icon: "error",
                confirmButtonColor: "#9A5832"
            });
        } 
    })

   

    return (

        <div className='h-full dark:bg-gray-800 pb-5 bg-white'>
            <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 '>

                <form encType="multipart/form-data" className='grid grid-cols-1 justify-center h-full ' method="post" onSubmit={onSubmit}>
                    <label htmlFor=""className='font-light pt-10 mt-[40px] dark:text-white text-black'>Nombre de la cancha</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black' 
                            {...register('name', { required: true, minLength: 4, maxLength: 40, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/  })} />
                    </div>
                    {
                        errors.title && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Tipo de techo.</p>
                            </div>
                        )
                    }
                    <label htmlFor=""className='font-light pt-10 mt-[40px] dark:text-white text-black'>Disponibilidad</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black' 
                            {...register('avaible', { required: true, minLength: 4, maxLength: 40, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/  })} />
                    </div>
                    {
                        errors.title && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Tipo de techo.</p>
                            </div>
                        )
                    }

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Tipo de suelo</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('floorType', {required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

                        {
                            errors.roofType && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Tipo de techo</label>
                    <div className='pt-1'>
                        <select
                            {...register('roofType', { required: true })}
                            className='font-light h-10 w-full border border-solid border-black p-2 text-black'>
                            <option value="" className='font-light'>Seleccionar:</option>
                            <option value="Techado" className='font-light'>Techado</option>
                            <option value="Sin techo" className='font-light'>Sin techo</option>
                        </select>
                    </div>
                    {
                        errors.room && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Metros Cuadrados</label>
                    <div className='pt-1'>
                        <input type="text"
                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('mts2', { required: true, minLength: 4, maxLength: 90, pattern: /^^\d+$/})} />

                        {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Precios</label>
                    <div className='pt-1'>
                        <input type="text"

                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('price', { required: true, minLength: 4, maxLength: 90, pattern: /^^\d+$/})} />

                        {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Imagen</label>
                    <div className="pt-2">


                        <input type="file" className="font-light dark:text-white text-black"
                            id = 'img'
                             {...register('img', {required: true}) }  
                             />
                             
                    </div>
                    {
                        errors.imagen && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    <div className='pt-5 grid justify-items-center mb-4'>
                        <button type="submit" className='font-light bg-[rgba(95,111,82,1)] text-white text-2xl'>Crear</button>
                    </div>
                </form>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}