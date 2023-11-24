const roomSchema = require('../models/rooms')
const reviewModel = require('../models/reviewModel')
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');
const { updateOne } = require('../models/products');
const createRooms = async (req, res) => {
    console.log("create rooms running")
    try {
        const { file } = req
        console.log(file)
        if (!req.file) return res.status(404).json({ messageError: 'Debes agregar una imagen del room' })
        console.log("here 2")
        const { path } = req.file;
        console.log("here 3")
        const {
            title,
            description,
            price,
            imagen,
            promo,
            modcon,
            modcon1,
            modcon2,
            modcon3,
        } = req.body
        console.log(req.body)
        console.log("here 4")
        let room = await roomSchema.findOne({ title });
        //  console.log(roomCompare);
        console.log("here 5")
        if (room) return res.status(404).json({ messageError: 'Ya existe esta habitación' });
        console.log("here 6")
        room = new roomSchema({
            title: title,
            description: description,
            price: price,
            imagen: imagen,
            promo: promo,
            modcon: modcon,
            modcon1: modcon1,
            modcon2: modcon2,
            modcon3: modcon3,
        });
        console.log(room)
        //  console.log(room);
        if (path) {
            console.log("here 8")
            try {
                console.log(path)
                const result = await uploadImageEvent(path)
                console.log("here 10")
                await fs.unlink(path)
                console.log("here 11")
                room.imagen = { public_id: result.public_id, secure_url: result.secure_url }
                console.log("here 12")
            } catch (error) {
                console.log("here 13")
                console.log(error)
                console.log("here 14")
                return res.status(500).json({

                    error: error
                })
            }
        }
        console.log("here 15")
        await room.save()
        console.log("here 16")
        return res.status(200).json({ room: room._id });
    } catch (error) {
        // console.log(error.message);
        return res.status(500).json({ messageError: error.message });
    }
}

const editRoom = async (req, res) => {
    try {
        let path;
        if (!!req.file) {
            path = req.file.path;
        }
        const { _id } = req.params;
        console.log(_id)
        const update = req.body;
        console.log(update)
        console.log(path)
        if (path !== undefined) {
            console.log("Searching a existed room")
            let room = await roomSchema.findById(_id)
            console.log("FINDED")
            await deleteImage(room.imagen.public_id)
            console.log("IMG DELETED")
            const result = await uploadImageEvent(path)
            console.log("NEW IMAGEE")
            await fs.unlink(path)
            update.imagen = { public_id: result.public_id, secure_url: result.secure_url }
            room = await roomSchema.findByIdAndUpdate(_id, update, { new: true })
            console.log(room)
            return res.status(200).json({ room: "The room has been edited" })
        }
        const room = await roomSchema.findByIdAndUpdate(_id, update, { new: true })
        return res.status(200).json({ room: "The room has been edited" })

    } catch (error) {
        return res.status(500).json({ messageError: error.message });
    }
}


const getAll = async (req, res) => {
    res.status(200).json({ hello: "world" })
}
const oneRoom = async (req, res) => {
    try {
        const { _id } = req.params
        const find = await roomSchema.findById({ _id }).populate('review')
        res.status(200).json({
            room: find
        })
    } catch (error) {
        return res.status(404).json({
            error: "Not found"
        })
    }
}
const roomAndReviews = async (req, res) => {
    try {
        const result = await roomSchema.find({}).populate('review')
        res.status(200).json({
            rooms: result
        })
    } catch (error) {
        res.status(400).json(
            {
                error: error
            }
        )
    }
}
const deleteRoom = async (req, res) => {
    try {
       const id = req.params._id;
       const room = await roomSchema.findByIdAndDelete(id)
 
       if (!room) return res.status(404).json({messageError: 'Invalid room'})
 
       await deleteImage(room.imagen.public_id)
       return res.status(200).json({message: "Room has been romeved"})
    } catch (error) {
       return res.status(404).json({messageError: error});
    }
 }

module.exports = { getAll, createRooms, roomAndReviews, editRoom, oneRoom, deleteRoom } 