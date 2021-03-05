const { response } = require('express');
const DataNode = require('../models/DataNode.model');

const getDataNodes = async ( req, res=response ) => {
    
    /** recuperar todos los datos */
    const dataNode = await DataNode.find();
        // .populate('user', )

    res.json({
        ok: true,
        nodes: dataNode
    })
}

const getDataNode = async ( req, res=response ) => {
    
    const idNameNode = "idNode";
    const nodeId = req.params.id;
    const dataNode = await DataNode.find({ [idNameNode]: nodeId});

    res.json({
        ok: true,
        nodes: dataNode
    })
}


const createDataNode = async ( req, res = response ) => {

    const dataNode = new DataNode( req.body );

    try {

        // plant.user = req.uid;

        const dataNodeSave = await dataNode.save();

        res.json({
            ok: true,
            data: dataNodeSave
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        })
    }
}

const updateDataNode = async ( req, res = response ) => {

    const dataNodeId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const dataNode = await DataNode.findById( dataNodeId);

        /** Verificar si el ID es incorrecto */
        if (!dataNode) {
            return res.status(404).json({
                ok: false,
                msg: 'Dato de nodo no existente'
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

        const newUpdateDataNode = {
            ...req.body,
            // user: uid
        }

        /** Modificar por ID, 3er valor indica que la actualizacion se visualizara */
        const dataNodeUpdated = await DataNode.findByIdAndUpdate(dataNodeId, newUpdateDataNode, { new: true } );

        res.json({
            ok: true,
            data: dataNodeUpdated
        })

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            msg: 'Algo fallo. Comuniquese con el administrador'
        })

    }
}

const deleteDataNode = async ( req, res = response ) => {
    
    const dataNodeId = req.params.id;
    // const uid = req.uid;

    try {
        /** Recupar documente con el ID */
        const dataNode = await DataNode.findById( dataNodeId);

        /** Verificar si el ID es incorrecto */
        if (!dataNode) {
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
        await DataNode.findByIdAndDelete( dataNodeId );

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
    getDataNodes,
    getDataNode,
    createDataNode,
    updateDataNode,
    deleteDataNode
}