const { response } = require('express');
const Plant = require('../models/Plant.model');

const getPlants = async ( req, res=response ) => {
    
    /** recuperar todos los datos */
    const plants = await Plant.find();
        // .populate('user', )

    res.json({
        ok: true,
        plants
    })
}


const createPlant = async ( req, res = response ) => {

    const plant = new Plant( req.body );

    try {

        // plant.user = req.uid;

        const plantSave = await plant.save();

        res.json({
            ok: true,
            plant: plantSave
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        })
    }
}

const updatePlant = async ( req, res = response ) => {

    const plantId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const plant = await Plant.findById( plantId);

        /** Verificar si el ID es incorrecto */
        if (!plant) {
            return res.status(404).json({
                ok: false,
                msg: 'Planta no existente con el id'
            })
        }

        /** Verificar que se esta modificando por el usuario creado */
        //TODO: Buscar la forma de que muchos usuarios puedan ingresar
        // if ( plant.user.toString() !== uid ) {
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'No tiene privilegios para editar este evento'
        //     });
        // }

        const newUpdatePlant = {
            ...req.body,
            // user: uid
        }

        /** Modificar por ID, 3er valor indica que la actualizacion se visualizara */
        const plantUpdated = await Plant.findByIdAndUpdate(plantId, newUpdatePlant, { new: true } );

        res.json({
            ok: true,
            plant: plantUpdated
        })

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'Algo fallo. Comuniquese con el administrador'
        })

    }
}

const deletePlant = async ( req, res = response ) => {
    
    const plantId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const plant = await Plant.findById( plantId);

        /** Verificar si el ID es incorrecto */
        if (!plant) {
            return res.status(404).json({
                ok: false,
                msg: 'Planta no existente con el id'
            })
        }

        /** Verificar que se esta modificando por el usuario creado */
        // if ( plant.user.toString() !== uid ) {
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'No tiene privilegios para editar este evento'
        //     });
        // }

        /** Eliminar por ID*/
        await Plant.findByIdAndDelete( plantId );

        res.json({
            ok: true
        })

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'Algo fallo. Comuniquese con el administrador'
        })

    }

}

module.exports = {
    getPlants,
    createPlant,
    updatePlant,
    deletePlant
}