import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function CreateSalons() {
    const { handleSubmit, register } = useForm()
    const onSubmit = (handleSubmit(async (values) => {
        const formData = new FormData();

        const files = [];
        for (const file of values.imagen) {
            files.push(file)
        }
        console.log(files)
        for (let i = 0; i < files.length; i++) {
            formData.append(["imagen"], files[i]);
        }


        try {
            const res = await axios.post("http://localhost:3000/createProduct", formData)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        // console.log(values)
    }))
    return (
        <form
            action="POST" onSubmit={onSubmit}>
                <label htmlFor="">Nombre</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("name")}
                type="file" />
                <label htmlFor="">Descripción</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("descripcion")}
                type="file" />
                <label htmlFor="">Metros cuadrados</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("mts2")}
                type="file" />
                <label htmlFor="">Insertar imágenes para el salón.</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("imagen")}
                type="file" />
                <label htmlFor="">Insertar imágenes para el salón.</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("imagen")}
                type="file" />
                <label htmlFor="">Insertar imágenes para el salón.</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("imagen")}
                type="file" />
                <label htmlFor="">Insertar imágenes para el salón.</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("imagen")}
                type="file" />
                <label htmlFor="">Insertar imágenes para el salón.</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("imagen")}
                type="file" />
            <label htmlFor="">Insertar imágenes para el salón.</label>
            <input
                multiple
                className='mt-[200px]'
                {...register("imagen")}
                type="file" />
            
            <button type="submit">enviar</button>
        </form>
    )
}