const { response } = require('express');
const Nodes = require('../models/Nodes.model');

const getNodes = async ( req, res=response ) => {
    
    /** recuperar todos los datos */
    const nodes = await Nodes.find();
        // .populate('user', )

    res.json({
        ok: true,
        nodes
    })
}


const createNode = async ( req, res = response ) => {

    const nodo = new Nodes( req.body );

    try {

        // plant.user = req.uid;

        const nodeSave = await nodo.save();

        res.json({
            ok: true,
            system: nodeSave
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        })
    }
}

const updateNode = async ( req, res = response ) => {

    const nodeId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const node = await Nodes.findById( nodeId);

        /** Verificar si el ID es incorrecto */
        if (!node) {
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

        const newUpdateNode = {
            ...req.body,
            // user: uid
        }

        /** Modificar por ID, 3er valor indica que la actualizacion se visualizara */
        const nodeUpdated = await Nodes.findByIdAndUpdate(nodeId, newUpdateNode, { new: true } );

        res.json({
            ok: true,
            plant: nodeUpdated
        })

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'Algo fallo. Comuniquese con el administrador'
        })

    }
}

const deleteNode = async ( req, res = response ) => {
    
    const nodeId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const node = await Nodes.findById( nodeId);

        /** Verificar si el ID es incorrecto */
        if (!node) {
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
        await Nodes.findByIdAndDelete( nodeId );

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
    getNodes,
    createNode,
    updateNode,
    deleteNode
}