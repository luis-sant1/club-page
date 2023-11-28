const Reservation = require('../models/reservations')
const salonModel = require('../models/salons')
const { validateReservation } = require('../validators/reservations')
const nodeMailer = require('nodemailer')
const myEmail = process.env.EMAIL
const passwordEmail = process.env.PASS
const createReservation = async (req, res) => {
    try {
        const { body } = req
        const salonName = await salonModel.findById(body.salon)
        
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
            Salón reservado: ${salonName.name}
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
        const { name, lastName, email, entryDate, exitDate, phone, salon} = body

        
        const newReservation = new Reservation({
            name,
            lastName,
            email,
            entryDate,
            exitDate,
            phone,
            salon: salonName._id
        })
        console.log(newReservation)
        const reservationSaved = await newReservation.save()
        salonName.reservations = salonName.reservations.concat(reservationSaved._id)
        await salonName.save()
        res.status(200).json({
            reservation: reservationSaved
        })
    } catch (error) {
        console.log("Error de la reservación " + error)
        res.status(500).json({ error: ["Hubo un error al crear reservación"] })
    }
}

module.exports = { createReservation }