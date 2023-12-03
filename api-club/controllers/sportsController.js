const sportSchema = require('../models/sports')
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');

const getALl = async (req, res) => {
    try {
        const result = await sportSchema.find({})
        return res.status(200).json({
            sports: result
        })
    } catch (error) {
        return res.status(500).json({
            sports: error
        })
    }
}

const insertMany = async (req,res) => {
    try {
        const newSport = new sportSchema({
            name: "Cancha de Futbol",
            roofType: "Sin techo",
            floorType: "Grama sintética",
            mts2: "500",
            price: "20",
            img: {
                "public_id": "",
                "secure_url": "https://www.sportwelt.cl/wp-content/uploads/2022/12/CANCHAS-DE-FUTBOL-SINTETICO-EN-CLUB-PALESTINO-2.jpg"
            },
            avaible: "Todo el día"
        })
        const newSport1 = new sportSchema({
            name: "Cancha de Basquetbol",
            roofType: "Techado",
            floorType: "Cancha de tabloncillo",
            mts2: "400",
            price: "20",
            img: {
                "public_id": "",
                "secure_url": "https://thumbs.dreamstime.com/z/las-canchas-de-baloncesto-del-lake-nona-club-fitness-center-en-orlando-florida-fl-usa-july-225454169.jpg?w=992"
            },
            avaible: "Todo el día"
        })
        const newSport2 = new sportSchema({
            name: "Cancha de Tenis",
            roofType: "Sin techo",
            floorType: "Cancha de cemento",
            mts2: "195.5",
            price: "20",
            img: {
                "public_id": "",
                "secure_url": "https://static.wixstatic.com/media/c2ad68_524d6ed13093402a97adc97df509a1f6~mv2.jpg/v1/fill/w_917,h_575,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_GRA3142_edited.jpg"
            },
            avaible: "Todo el día"
        })
        const newSport3= new sportSchema({
            name: "Cancha de Bolas Criollas",
            roofType: "Techado",
            floorType: "Cancha de tierra",
            mts2: "600",
            price: "25",
            img: {
                "public_id": "",
                "secure_url": "https://hermandadgallega.net/img/galerias/8e1_DSC_1857.jpg"
            },
            avaible: "Todo el día"
        })
        const newSport4 = new sportSchema({
            name: "Piscina",
            roofType: "Sin techo",
            floorType: "",
            mts2: "32",
            price: "35",
            img: {
                "public_id": "",
                "secure_url": "https://clubloscortijos.com/site/wp-content/uploads/2020/09/Piscina-semiolímpica-toma-aerea-1.jpg?189db0&189db0"
            },
            avaible: "Desde las 10h hasta las 16h"
        })
        await newSport.save()
        await newSport1.save()
        await newSport2.save()
        await newSport3.save()
        await newSport4.save()
        return res.status(200).json({
            resutl: "Data has been created succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            error:error
        })
    }
}

const create = async (req, res) => {
    try {
        console.log("this is req.fil")
        console.log(req.file)
        if (!req.file) return res.status(404).json({ messageError: 'Debes agregar una imagen del item' })
        const { path } = req.file;

        const {
            name,
            roofType,
            floorType,
            mts2,
            price,
            img,
            avaible
        } = req.body;

        let item = await sportSchema.findOne({ name });
        console.log(item);
        if (item) return res.status(404).json({ messageError: 'Ya existe este item' });

        item = new sportSchema({
            name,
            roofType,
            floorType,
            mts2,
            price,
            img,
            avaible
        });
        console.log(item);
        if (path) {
            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            item.img = { public_id: result.public_id, secure_url: result.secure_url }
        }
        await item.save()
        return res.status(200).json({ item: item });
    } catch (error) {
        // console.log(error.message);
        return res.status(500).json({ messageError: error.message });
    }
}

const edit = async (req, res) => {
    try {
        let path;
        if (!!req.file) {
            path = req.file.path;
        }
        const { _id } = req.params;
        console.log(_id)
        const update = req.body;

        if (path !== undefined) {

            let item = await sportSchema.findById(_id)
            console.log('1')
            await deleteImage(item.img.public_id)
            console.log('2')

            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            update.img = { public_id: result.public_id, secure_url: result.secure_url }
            item = await sportSchema.findByIdAndUpdate(_id, update, { new: true })

            return res.status(200).json({ item: "The item has been edited" })
        }
        const item = await sportSchema.findByIdAndUpdate(_id, update, { new: true })
        return res.status(200).json({ item: "The item has been edited" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ messageError: error.message });
    }
}

const deleteOne = async(req, res) => {
    try {
        const {_id} = req.params
        const result = await sportSchema.findByIdAndDelete(_id)
        return res.status(200).json({
            message: "Item has been romeved"
        })
    } catch (error) {
        return res.status(500).json({
            error:error
        })
    }
}

module.exports = { getALl , create, edit, deleteOne, insertMany}