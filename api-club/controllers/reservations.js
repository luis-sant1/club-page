const reservations = require('../models/reservations')
const Reservation = require('../models/reservations')
const salonModel = require('../models/salons')
const sportSchema = require('../models/sports')
const { validateReservation } = require('../validators/reservations')
const nodeMailer = require('nodemailer')
const myEmail = process.env.EMAIL
const passwordEmail = process.env.PASS
const moment = require('moment')
const createReservation = async (req, res) => {
    try {
        console.log("1")
        const { body } = req
        const { name, lastName, email, entryDate, exitDate, phone, check, entryHour, exitHour } = body
        const { _id } = req.params
        let newReservation;
        let salonId;
        let sportId
        console.log("1")
        let item = await salonModel.findById(_id)
        console.log("2")
        if(item){
            salonId = item._id
        }else if (!item) {
            item = await sportSchema.findById(_id)
            sportId = item._id
        }
        console.log("3")
        let config = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            post: 587,
            auth: {
                user: myEmail,
                pass: passwordEmail,
            }
        })
        const msg = {
            from: req.body.email,
            subject: 'Reservación: Métodos de pago aceptados. Perubiam',
            to: req.body.email,
            text:
                `Querido cliente, hemos recibido la información de su reservación, procesaremos manualmente la información dada por usted para asegurar que usted y su familia puedan disfrutar de una inolvidable estadía en nuestro Hotel. 

            Aquí están los datos de su reservación:
            E-mail: ${req.body.email.toString()}
            Nombre: ${req.body.name.toString()}
            Apellido: ${req.body.lastName.toString()}
            Fecha de entrada: ${req.body.entryDate.toString()}
            Fecha de salida: ${req.body.exitDate.toString()}
            Número de teléfono: ${req.body.phone.toString()}
            Salón reservado: ${item.name}
            `
        }

        config.sendMail(msg, function (err, data) {
            if (err) {
                console.log("Error " + err);
                return res.status(400).json({
                    error: err
                })
            } else {
                console.log("Email sent successfully");
            }
        })
        
        const newExitDateInput = moment(exitDate).format("YYYY-MM-DD")
        const newEntryDateInput = moment(entryDate).format("YYYY-MM-DD")
        console.log('4')
        if(salonId){
            newReservation = new Reservation({
                name,
                lastName,
                email,
                entryDate: newEntryDateInput,
                exitDate: newExitDateInput,
                entryHour,
                exitHour,
                phone,
                check,
                salon: salonId
            })
        }else if(sportId){
            newReservation = new Reservation({
                name,
                lastName,
                email,
                entryDate: newEntryDateInput,
                exitDate: newExitDateInput,
                entryHour,
                exitHour,
                phone,
                check,
                sport: sportId
            })
        } else if ( !sportId && !salonId){
            return res.status(500).json({ error: "Hubo un error al asignar reservaciión" })
        }
        console.log('5')
        console.log(newReservation)
        // const reservationSaved = await newReservation.save()
        // item.reservations = item.reservations.concat(reservationSaved._id)
        // await item.save()
        res.status(200).json({
            reservation: newReservation
        })
    } catch (error) {
        console.log("Error de la reservación " + error)
        res.status(500).json({ error: ["Hubo un error al crear reservación"] })
    }
}

const getAll = async (req, res) => {
    try {
        const results = await reservations.find({})
        return res.status(200).json({
            data: results
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

module.exports = { createReservation, getAll }