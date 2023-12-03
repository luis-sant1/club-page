const restaurantsModel = require('../models/restaurant')
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');

const getAll = async (req, res) => {
    try {
        const result = await restaurantsModel.find({})
        return res.status(200).json({
            restaurants: result
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}
const getOne = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await restaurantsModel.findById(_id)
        return res.status(200).json({
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            restaurant: error
        })
    }
}
const deleteOne = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await restaurantsModel.findByIdAndDelete(_id)
        return res.status(200).json({
            data: "Restaurante borrado con éxito"
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}
const create = async (req, res) => {
    console.log("restaurant running")
    try {
        const urls = [];

        const files = req.files

        for (const file of files) {
            const { path } = file
            const newPath = await uploadImageEvent(path)

            urls.push(newPath)

            fs.unlinkSync(path)

        }
        const {
            name,
            description,
            imagen
        } = req.body;
        let item = await restaurantsModel.findOne({ nombre });
        if (item) return res.status(404).json({ messageError: 'Ya existe este restaurante' });

        item = new restaurantsModel({
            name,
            description,
            imagen
        });
        // console.log(item);
        for (const object of urls) {
            console.log(object)
            item.imagen.push({ public_id: object.public_id, secure_url: object.secure_url })
        }
        await item.save()
        return res.status(200).json({ item: item });
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}
const editONe = async (req, res) => {
    try {
        const { _id } = req.params
        const urls = [];

        const files = req.files
        const update = req.body
        console.log('ejecting')
        if (files !== undefined) {

            let item = await restaurantsModel.findById(_id)
            console.log('1')
            for (const imagen of item.imagen) {
                await deleteImage(imagen.public_id)
                console.log(imagen)
            }
            item.imagen = [];
            update.imagen = [];
            console.log('2')
            console.log(item.imagen)

            for (const file of files) {
                const { path } = file
                const newPath = await uploadImageEvent(path)

                urls.push(newPath)

                fs.unlinkSync(path)

            }
            console.log('3')
            console.log(urls)
            console.log(update.imagen)
            for (const object of urls) {
                // return console.log(object)
                update.imagen.push({
                    public_id: object.public_id, secure_url: object.secure_url
                })
            }
            console.log('ejecting 2')


            item = await restaurantsModel.findByIdAndUpdate(_id, update, { new: true })
            console.log('ejecting 3')
            return res.status(200).json({ item: "The item has been edited" })
        }
        console.log('there is')
        const item = await restaurantsModel.findByIdAndUpdate(_id, update, { new: true })
        return res.status(200).json({ item: "The item has been edited" })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const insertMany = async (req, res) => {
    try {
        const newRes = new restaurantsModel({
            name: "La Cabaña",
            description: "Un restaurante de comida tradicional, con una cabaña de madera y una chimenea. Disfruta de platos como el sancocho, el pabellón o el quesillo",
            imagen: [{
                secure_url: ""
            },
            {
                secure_url: "https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?w=740&t=st=1701639769~exp=1701640369~hmac=2b1b65949b75ddb6832227d5904b7eec7255239cf726d69f42668c6424bcf902"
            }]
        })
        const newRes1 = new restaurantsModel({
            name: "Il Forno",
            description: "Un restaurante de comida italiana, con un horno de leña y una decoración rústica. Prueba platos como la pizza napolitana, la pasta carbonara o el cannoli.",
            imagen: [{
                secure_url: ""
            },
            {
                secure_url: "https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/comer/top-de-gastronomia/los-restaurantes-mas-antiguos-de-espana/gr-cms-media-featured_images-none-759f762b-7965-41cd-a979-da49509e205d-1.jpg.transform/rp-rendition-md/image.jpg"
            }]
        })
        const newRes2 = new restaurantsModel({
            name: "Sakura",
            description: "Un restaurante de comida japonesa, con un ambiente zen y una carta variada. Saborea platos como el sushi, el ramen o el mochi.",
            imagen: [{
                secure_url: ""
            },
            {
                secure_url: "https://img.freepik.com/foto-gratis/camarero-feliz-sirviendo-comida-grupo-amigos-alegres-pub_637285-12525.jpg?w=740&t=st=1701640110~exp=1701640710~hmac=b76baf0eff536ca0563c2c65756108d519f5f127d5a33eebf76c83def62e50db"
            }]
        })
        const newRes3 = new restaurantsModel({
            name: "Green House",
            description: "Un restaurante de comida saludable, con un jardín ecológico y un concepto sostenible. Degusta platos como la ensalada de kale, el hummus de garbanzos o el batido de avena.",
            imagen: [{
                secure_url: ""
            },
            {
                secure_url: "https://img.freepik.com/foto-gratis/restaurante-al-aire-libre-sillas-mesas-madera_181624-57563.jpg?t=st=1701639386~exp=1701639986~hmac=611bb8531a33c763d831d1e8267b3b7252a57db18fae7061622bad8a2fd04711"
            }]
        })
        await newRes.save()
        await newRes1.save()
        await newRes2.save()
        await newRes3.save()
        return res.status(200).json({
            msg: "All date has been created."
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    editONe,
    insertMany
}