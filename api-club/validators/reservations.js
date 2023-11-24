const { check, validationResult } = require('express-validator');
const Reservation = require('../models/reservations')

const validateReservation = [
    check('name')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isLength({
            min: 4,
            max: 90
        }),
    check('lastName')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isLength({
            min: 4,
            max: 90
        }),
    check('email')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isEmail()
        .custom(value => {
            return Reservation.findOne({
                email: value
            }).then(reservation => {
                if (reservation) {
                    return Promise.reject('E-mail asociado a una reservación.');
                }
            });
        }),
    check('entryDate')
        .exists()
        .withMessage('Campo Obligatorio.')
        .isDate(),
    check('exitDate')
        .exists()
        .withMessage('Campo Obligatorio.')
        .isDate()
        .custom((date, { req }) => {
            const newDate = new Date() // nueva fecha
            const dOTD  = (d) => { // refactorizamos esa fecaha
                return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() 
              }

            
            if (req.body.exitDate <= req.body.entryDate) { // camaparamos fechas en los inputs
                throw new Error(
                    '¡Fecha de salida debe ser mayor a fecha de entrada!')
            }
            if (req.body.entryDate < dOTD(newDate) ) { // Comapramos fecha de input con acutal
                throw new Error(
                    '¡Fecha de entrada no valida! Menor a fecha actual.')
            }
            
            return true
        }),
    check('phone')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.')
        .isLength({
            min: 9,
            max: 9
        })
        .withMessage('Número teléfonico debe contener 9 carácteres.'),
    check('address')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.'),
    check('room')
        .exists()
        .withMessage('Campo Obligatorio.')
        .notEmpty()
        .withMessage('Campo Obligatorio.'),
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