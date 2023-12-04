import { useForm } from 'react-hook-form'
import { sendDataUrl } from '../api/requests'
import Swal from 'sweetalert2'
export default function CreateDeport() {
    const { register, handleSubmit, control, formState: {
        errors
    }} = useForm()
    
    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData();
        formData.append("imagen", values.imagen[0]);
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("promo", values.promo);
        formData.append("modcon", values.modcon);
        formData.append("modcon1", values.modcon1);
        formData.append("modcon2", values.modcon2);
        formData.append("modcon3", values.modcon3);
        values = { ...values, imagen: values.imagen[0]};
        
        try {
            await sendDataUrl(formData)
            await Swal.fire({
                title: "Habitación creada con exito.",
                icon: "success",
                confirmButtonColor: "#9A5832"
            });
            window.location.href = '/*'
            
        } catch (error) {
            await Swal.fire({
                title: "Ha ocurrido un error al crear la habitación.",
                icon: "error",
                confirmButtonColor: "#9A5832"
            });
        }
    })

   

    return (

        <div className='h-full dark:bg-gray-800 pb-5 bg-white'>
            <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 '>

                <form enctype="multipart/form-data" className='grid grid-cols-1 justify-center h-full ' method="post" onSubmit={onSubmit}>
                    <label htmlFor=""className='font-light pt-10 mt-[40px] dark:text-white text-black'>Nombre de la cancha</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black' 
                            {...register('title', { required: true, minLength: 4, maxLength: 40, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/  })} />
                    </div>
                    {
                        errors.title && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Característica 1</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon1', {required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

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

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Techado o al aire libre (Característica 2)</label>
                    <div className='pt-1'>
                        <select
                            {...register('room', { required: true })}
                            className='font-light h-10 w-full border border-solid border-black p-2 text-black'>
                            <option value="" className='font-light'>Seleccionar:</option>
                            <option value="techado" className='font-light'>Techado</option>
                            <option value="libre" className='font-light'>Al aire libre</option>
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

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Característica 3</label>
                    <div className='pt-1'>
                        <input type="text"
                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon3', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/})} />

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

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Característica 4</label>
                    <div className='pt-1'>
                        <input type="text"

                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

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


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Imagen de la Cancha</label>
                    <div className="pt-2">


                        <input type="file" className="font-light dark:text-white text-black"
                            id = 'imagen'
                             {...register('imagen', {required: true}) }  
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
                        <button type="submit" className='font-light bg-[rgba(95,111,82,1)] text-white text-2xl'>Crear Cancha</button>
                    </div>
                </form>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}