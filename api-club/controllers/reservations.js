const Reservation = require('../models/reservations')
const { validateReservation } = require('../validators/reservations')
const nodeMailer = require('nodemailer')
const myEmail = process.env.EMAIL
const passwordEmail = process.env.PASS
const createReservation = async (req, res) => {
    try {
        const { body } = req
        const price = (type) => {
            if(type == "Matrimonial"){
                return "55$ por noche"
            }else if(type == "3 Personas"){
                return "70$ por noche"
            }else if(type == "4 Personas"){
                return "85$ por noche"
            }else if(type == "5 Personas"){
                return "100$ por noche"
            }else if(type == "6 Personas"){
                return "115$ por noche"
            }
        }
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
            Dirección: ${req.body.address.toString()}
            Habitación deseada: ${req.body.room.toString()}
            
            En seguida nuestros métodos de pago:
            Transferencia:
            Banco del Amor Patrio AMIGO.
            Cuenta bancaria: 02359811461770261430
            RIF: 123FR1233

            Zelle:
            E-mail: perubiamhotelsuits@gmail.com

            El precio total para su habitación de ${req.body.room.toString()} es de ${price(req.body.room.toString())}
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
        const { name, lastName, email, entryDate, exitDate, address, check, room, phone } = body


        const newReservation = new Reservation({
            name,
            lastName,
            email,
            entryDate,
            exitDate,
            phone,
            address,
            room,
            check,
        })
        console.log(newReservation)
        const reservationSaved = await newReservation.save()
        res.status(200).json({
            reservation: reservationSaved
        })
    } catch (error) {
        console.log("Error de la reservación " + error)
        res.status(500).json({ error: ["Hubo un error al crear reservación"] })
    }
}

module.exports = { createReservation }