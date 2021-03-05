/**
 * System Routes
 * /api/Systems
 */

const { Router } = require('express');
const router = Router();

const { getSystems, createSystem, updateSystem, deleteSystem } = require('../controllers/systems.controller')

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
// const { idDate } = require('../helpers/isDate');

/** Validacion primeramente con JWT */
router.use( validateJWT );

/** CRUD
 * -----------------------
 */

/** Obtencion de System */
router.get('/', getSystems);

/** Crear una nueva System
 * el [...] es un middleware... para verificar y validar los campos
*/
router.post(
    '/',
    [
        check('codSystem', 'El codigo es Obligatorio').not().isEmpty(),
        check('name', 'El nombre es Obligatorio').not().isEmpty(),
        validateFields
    ],
    createSystem
);

/** Actualizar datos de Systema */
router.put('/:id', updateSystem);

/** Borrar Systema */
router.delete('/:id', deleteSystem);


module.exports = router;