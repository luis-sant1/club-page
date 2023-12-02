const { body, param,  validationResult } = require('express-validator');
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
            const reservation = await reservations.find({
                salon: _id
            })
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
            if (newEntryDateInput >= newEntryDateDb || newEntryDateInput <= newExitDateDb) {
                return Promise.reject('Fecha en reserva')
            } else if (newExitDateInput >= newEntryDateDb || newExitDateInput <= newExitDateDb) {
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
            const dOTD = (d) => { // refactorizamos esa fecaha
                return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
            }


            if (req.body.exitDate <= req.body.entryDate) { // camaparamos fechas en los inputs
                throw new Error(
                    '¡Fecha de salida debe ser mayor a fecha de entrada!')
            }
            if (req.body.entryDate < dOTD(newDate)) { // Comapramos fecha de input con acutal
                throw new Error(
                    '¡Fecha de entrada no valida! Menor a fecha actual.')
            }

            return true
        }),    
    body('entryHour')
    .exists()
    .notEmpty()
    .custom(async (entryHour, {req}) => {
        const {_id} = req.params
        const {exitHour} = req.body
        const reservation = await reservations.find({
            salon : _id
        })
        let entryHourDb;
        let exitHourDb;
        reservation?.map(x => {
            entryHourDb = x.entryHour
            exitHourDb = x.exitHour
        })
        console.log(entryHourDb)
        console.log(exitHourDb)

        if(entryHour >= entryHourDb || exitHour <= exitHourDb){
            return Promise.reject("Hora de entrada en reserva hasta las:" + exitHourDb )
        }  else if (exitHour >= entryHourDb || exitHour <= exitHourDb) {
            return Promise.reject('Hora en reserva')
        }
        return true
    }),
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