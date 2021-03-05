/**
 * PLant Routes
 * /api/plants
 */

const { Router } = require('express');
const router = Router();

const { getPlants, createPlant, updatePlant, deletePlant } = require('../controllers/plant.controller')

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
// const { idDate } = require('../helpers/isDate');

/** Validacion primeramente con JWT */
router.use( validateJWT );

/** CRUD
 * -----------------------
 */

/** Obtencion de plant */
router.get('/', getPlants);

/** Crear una nueva Plant
 * el [...] es un middleware... para verificar y validar los campos
*/
router.post(
    '/',
    [
        check('name', 'El titulo esta vacio, es obligatorio').not().isEmpty(),
        check('description', 'La descripcion esta vacio, es obligatorio').not().isEmpty(),
        check('lat', 'La latitud esta vacio, es necesario').not().isEmpty(),
        check('long', 'La longitud esta vacio, es necesario').not().isEmpty(),
        validateFields
    ],
    createPlant
);

/** Actualizar datos de Planta */
router.put('/:id', updatePlant);

/** Borrar Planta */
router.delete('/:id', deletePlant);


module.exports = router;