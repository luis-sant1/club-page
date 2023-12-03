const { body, param, validationResult } = require('express-validator');
const reservations = require('../models/reservations')
const moment = require('moment')
const validateReservation = [
    body('name')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isLength({
            min: 4,
            max: 90
        }),
    body('lastName')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isLength({
            min: 4,
            max: 90
        }),
    body('email')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isEmail()
        .withMessage('Error formato'),
    body('entryDate')
        .exists()
        .withMessage('Campo Obligatorio.')
        .isDate()
        .custom(async (value, { req }) => {
            const { _id } = req.params
            const { exitDate } = req.body
            let reservation = await reservations.find({
                salon: _id
            })
            if (!reservation) {
                reservation = await reservations.find({
                    sport: _id
                })
            }
            let reserExit;
            let reserEntry;
            reservation?.map((x) => {
                reserExit = x.exitDate,
                    reserEntry = x.entryDate
            })
            const newExitDateInput = moment(exitDate).format("YYYY-MM-DD")
            const newEntryDateInput = moment(value).format("YYYY-MM-DD")
            const newExitDateDb = moment(reserExit).format("YYYY-MM-DD")
            const newEntryDateDb = moment(reserEntry).format("YYYY-MM-DD")
            if (newEntryDateInput >= newEntryDateDb && newEntryDateInput <= newExitDateDb) {
                return Promise.reject('Fecha en reserva')
            } else if (newExitDateInput >= newEntryDateDb && newExitDateInput <= newExitDateDb) {
                return Promise.reject('Fecha en reserva')
            }
            return true
        }),
    body('exitDate')
        .exists()
        .withMessage('Campo Obligatorio.')
        .isDate()
        .custom((date, { req }) => {
            const newDate = new Date() // nueva fecha
            console.log(newDate)

            const dOTD = (d) => { // refactorizamos esa fecaha
                return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
            }

            if (req.body.exitDate <= req.body.entryDate) { // camaparamos fechas en los inputs
                throw new Error(
                    '¡Fecha de salida debe ser mayor a fecha de entrada!')
            }
            if (req.body.entryDate < newDate) { // Comapramos fecha de input con acutal
                throw new Error(
                    '¡Fecha de entrada no valida! Menor a fecha actual.')
            }

            return true
        }),
    body('entryHour')
        .exists()
        .notEmpty()
        .custom(async (entryHour, { req }) => {
            const { _id } = req.params
            const { exitDate } = req.body
            const { entryDate } = req.body
            const { exitHour } = req.body
            let entryHourDb;
            let exitHourDb;
            
            console.log(entryHourDb)
            console.log(exitHourDb)

            let reservation = await reservations.find({
                salon: _id,
            })
            if (!reservation) {
                reservation = await reservations.find({
                    sport: _id
                })
            }
            let reserExit;
            let reserEntry;
            reservation?.map((x) => {
                reserExit = x.exitDate,
                    reserEntry = x.entryDate
            })

            reservation?.map(x => {
                entryHourDb = x.entryHour
                exitHourDb = x.exitHour
            })

            const newExitDateInput = moment(exitDate).format("YYYY-MM-DD")
            const newEntryDateInput = moment(entryDate).format("YYYY-MM-DD")
            const newExitDateDb = moment(reserExit).format("YYYY-MM-DD")
            const newEntryDateDb = moment(reserEntry).format("YYYY-MM-DD")

            if (newEntryDateInput >= newEntryDateDb && newEntryDateInput <= newExitDateDb) {
                if (entryHour >= entryHourDb || exitHour <= exitHourDb) {
                    return Promise.reject("Hora de entrada en reserva desdelas "+ entryHourDb + " hasta las: " + exitHourDb)
                }
                return true
            } else if (newExitDateInput >= newEntryDateDb && newExitDateInput <= newExitDateDb) {
                if (entryHour >= entryHourDb || exitHour <= exitHourDb) {
                    return Promise.reject("Hora de entrada en reserva desde las "+ entryHourDb + " hasta las: " + exitHourDb)
                }
                return true
            }
            return true
        })
        ,
    body('exitHour')
        .exists()
        .notEmpty(),
    body('phone')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isLength({
            min: 9,
            max: 9
        })
        .withMessage('Número teléfonico debe contener 9 carácteres.'),
    param('_id')
        .exists()
        .notEmpty()
        .isMongoId(),
    body('check')
        .exists()
        .isBoolean(),
    (req, res, next) => {
        try {
            validationResult(req).throw() // Busca error
            return next()
        } catch (error) {
            console.log("Esto es un error de validator " + error)
            return res.status(403).json({
                error: error.array()
            })
        }
    }
]

module.exports = { validateReservation };