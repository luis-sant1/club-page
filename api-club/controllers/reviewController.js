const reviewModel = require('../models/reviewModel')
const roomSchema = require('../models/rooms')

const create = async(req, res) => {
    try {
       const { username, review, roomId } = req.body
       const room = await roomSchema.findById(roomId)
       const newReview = new reviewModel({
        username, 
        review,
        roomId : room._id
       })
  
       const saveReview = await newReview.save()
       room.review = room.review.concat(saveReview._id)
       await room.save()

        res.status(200).json({
            review: saveReview
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

const getAll = async (req, res) => {
    const respond = await reviewModel.find({})
    res.status(200).json({
        reviews: respond
    })
}

module.exports = { create, getAll }