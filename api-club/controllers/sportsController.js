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
            await deleteImage(item.imagen.public_id)
            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            update.imagen = { public_id: result.public_id, secure_url: result.secure_url }
            item = await sportSchema.findByIdAndUpdate(_id, update, { new: true })

            return res.status(200).json({ item: "The item has been edited" })
        }
        const item = await sportSchema.findByIdAndUpdate(_id, update, { new: true })
        return res.status(200).json({ item: "The item has been edited" })

    } catch (error) {
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

module.exports = { getALl , create, edit, deleteOne}