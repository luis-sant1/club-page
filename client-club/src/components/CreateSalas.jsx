import { useForm } from 'react-hook-form'
import { createaSalon } from '../api/requests'
import Swal from 'sweetalert2'
export default function CreateSalas() {
    const { register, handleSubmit, control, formState: {
        errors
    }} = useForm()
    
    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData();
        formData.append("nombre", values.nombre);
        formData.append("description", values.description);
        formData.append("mts2", values.mts2);
        formData.append("site", values.site);
        formData.append("max", values.max);
        formData.append("feature", values.feature);
        formData.append("price", values.price);
        const files = [];

        for (const file of values.imagen) {
            files.push(file)
        }
        console.log(files)
        for (let i = 0; i < files.length; i++) {
            formData.append(["imagen"], files[i]);
        }

        
        try {
            console.log(values)
            await createaSalon(formData)
            await Swal.fire({
                title: "Salón creado con exito.",
                icon: "success",
                confirmButtonColor: "#9A5832"
            });
            window.location.href = '/*'
            
        } catch (error) {
            await Swal.fire({
                title: "Ha ocurrido un error al crear el salón.",
                icon: "error",
                confirmButtonColor: "#9A5832"
            });
        }
    })

   

    return (

        <div className='h-full dark:bg-gray-800 pb-5 bg-white'>
            <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 '>

                <form enctype="multipart/form-data" className='grid grid-cols-1 justify-center h-full ' method="post" onSubmit={onSubmit}>
                    <label htmlFor=""className='font-light pt-10 mt-[40px] dark:text-white text-black'>Titulo de la Sala</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black' 
                            {...register('nombre', { required: true, minLength: 4, maxLength: 40, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/  })} />
                    </div>
                    {
                        errors.nombre && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Descripción</label>
                    <div className='pt-1'>
                        <input type="text"
                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('description', {required: true, minLength: 4, maxLength: 200, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

                        {
                            errors.description && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Precio</label>
                    <div className='pt-1'>
                        <input type="text"
                           className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('price', {required: true, minLength: 2, maxLength: 4, pattern: /^^\d+$/})} />

                    </div>
                    {
                        errors.price && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Maxima capacidad de personas</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('max', {required: true, minLength: 4, maxLength: 90, pattern: /^^\d+$/})} />

                        {
                            errors.maax && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Sitio</label>
                    <div className='pt-1'>
                        <select
                            {...register('site', { required: true })}
                            className='font-light h-10 w-full border border-solid border-black p-2 text-black'>
                            <option value="" className='font-light'>Seleccionar:</option>
                            <option value="Interior" className='font-light'>Interior</option>
                            <option value="Exterior" className='font-light'>Exterior</option>
                        </select>
                    </div>
                    {
                        errors.site && (
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
                            errors.mts2 && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Característica extra</label>
                    <div className='pt-1'>
                        <input type="text"

                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('feature', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

                        {
                            errors.feature && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Imagen de la Sala</label>
                    <div className="pt-2">


                        <input multiple type="file" className="font-light dark:text-white text-black"
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
                        <button type="submit" className='font-light bg-[rgba(95,111,82,1)] text-white text-2xl'>Crear Sala</button>
                    </div>
                </form>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}