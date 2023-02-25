const {check} = require("express-validator")

module.exports = [

    check("name")
        .notEmpty().withMessage("El nombre no puede estar vacío"),

    check("color")
        .notEmpty().withMessage("El color no puede estar vacío"),

    check("mail")
        .notEmpty().withMessage("El e-mail no puede estar vacío"),

    check("edad")
        .isInt({min : 1}).withMessage("Ingresar un numero")
]