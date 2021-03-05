/** Routes: Proveedor de rutar de autenticacion con expressjs
 * @module routes/auth
 * @requires express
 * @requires express-validator
 * @requires ../middlewares/validate-fields
 * @requires ../middlewares/validate-jwt
 *  host + /api/auth
 */ 
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

/** Exportar Funciones para responder a la peticion */
const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt')

/** Rutas con sus funciones que responden a la peticion
 * @name post/new
 * @function
 * @memberof module:routes/auth~authRoute
 * @param {string} path - Express path
 * @param {callback} middleware - express middleware
 * 
 */
router.post(
    '/new',
    [ /** Middlewares  */
        /** express-valitor check, not: obligatorio, isEmpty: no este vacio */
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'no es, email es incorrecto').isEmail(),
        check('password', 'el password debe de ser de 6 caracteres').isLength({min: 6}),
        /** Llama a la funcion de middlewares para verificar si los datos/campos son los correctos */
        validateFields,
    ],
    createUser );

router.post(
    '/',
    [
        check('email', 'email no existente').isEmail(),
        check('password', 'password debe ser mas de  6 caracteres').isLength({min: 6}),
        validateFields,
    ],
    loginUser);

router.get('/renew', validateJWT , renewToken);

module.exports = router;