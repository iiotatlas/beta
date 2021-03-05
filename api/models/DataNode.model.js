const { Schema, model } = require('mongoose');

/** Modelado del esquema nodes para mongoDB */

const DataNodeSchema = Schema({
    codNode: {
        type: String,
        required: true
    },
    ejeY: {
        type: String,
        required: true
    },
    ejeX: {
        type: String,
        required: true
    },
    currentDataTime: {
        type: Date
    }
});

/** Convertir a json */
DataNodeSchema.method('toJSON', function(){
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('DataNode', DataNodeSchema)