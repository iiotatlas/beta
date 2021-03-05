/**
 * System Routes
 * /api/Systems
 */

const { Router } = require('express');
const router = Router();

const { getNodes, createNode, updateNode, deleteNode } = require('../controllers/nodes.controller')

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
router.get('/', getNodes);

/** Crear una nueva System
 * el [...] es un middleware... para verificar y validar los campos
*/
router.post(
    '/',
    [
        check('name', 'El nombre es Obligatorio').not().isEmpty(),
        validateFields
    ],
    createNode
);

/** Actualizar datos de Systema */
router.put('/:id', updateNode);

/** Borrar Systema */
router.delete('/:id', deleteNode);


module.exports = router;