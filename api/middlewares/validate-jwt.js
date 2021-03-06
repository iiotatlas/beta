/**
 * Validacion de los datos con JWT
 * @module middleware/validate-jwt
*/

const { response } = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');


const validateJWT = (req, res = response, next) => {

    /** x-token headers */
    const token = req.header('x-token');

    if( !token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay toque de la peticion',
        });

        req.uid = payload.uid
    }

    try {
        const { uid, name } = jwt.verify(
            token,
            config.jwtSecret,
        );

        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido',
        });
    }

    next();
}


module.exports = {
    validateJWT,
}