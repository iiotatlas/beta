const { response } = require('express');
const Systems = require('../models/Systems.model');

const getSystems = async ( req, res=response ) => {
    
    /** recuperar todos los datos */
    const systems = await Systems.find();
        // .populate('user', )

    res.json({
        ok: true,
        systems
    })
}


const createSystem = async ( req, res = response ) => {

    const system = new Systems( req.body );

    try {

        // system.user = req.uid;

        const systemSave = await system.save();

        res.json({
            ok: true,
            system: systemSave
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        })
    }
}

const updateSystem = async ( req, res = response ) => {

    const systemId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const system = await Systems.findById( systemId);

        /** Verificar si el ID es incorrecto */
        if (!system) {
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

        const newUpdateSystem = {
            ...req.body,
            // user: uid
        }

        /** Modificar por ID, 3er valor indica que la actualizacion se visualizara */
        const systemUpdated = await Systems.findByIdAndUpdate(systemId, newUpdateSystem, { new: true } );

        res.json({
            ok: true,
            plant: systemUpdated
        })

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'Algo fallo. Comuniquese con el administrador'
        })

    }
}

const deleteSystem = async ( req, res = response ) => {
    
    const systemId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const system = await Systems.findById( systemId);

        /** Verificar si el ID es incorrecto */
        if (!system) {
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
        await Systems.findByIdAndDelete( systemId );

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
    getSystems,
    createSystem,
    updateSystem,
    deleteSystem
}