/**
 * dataNode Routes
 * /api/Systems
 */

const { Router } = require('express');
const router = Router();

const { getDataNodes, getDataNode, createDataNode, updateDataNode, deleteDataNode } = require('../controllers/dataNode.controller')

// const { check } = require('express-validator');
// const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
// const { idDate } = require('../helpers/isDate');

/** Validacion primeramente con JWT */
router.use( validateJWT );

/** CRUD
 * -----------------------
 */

/** Obtencion de dataNode */
router.get('/', getDataNodes);

/** Obtencion de dataNode de un nodo */
router.get('/:id', getDataNode);

/** Crear una nueva dataNode
 * el [...] es un middleware... para verificar y validar los campos
*/
router.post(
    '/',
    // [
    //     check('name', 'El nombre es Obligatorio').not().isEmpty(),
    //     validateFields
    // ],
    createDataNode
);

/** Actualizar datos de Systema */
router.put('/:id', updateDataNode);

/** Borrar Systema */
router.delete('/:id', deleteDataNode);


module.exports = router;