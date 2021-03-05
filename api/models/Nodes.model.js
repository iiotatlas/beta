const { Schema, model } = require('mongoose');

/** Modelado del esquema nodes para mongoDB */
//TODO: unitx y y, mejorar codigo
const NodeSchema = Schema({
    codNode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    topic: {
        type: String,
    },
    unitY: {
        type: String,
    },
    unitX: {
        type: String,
    },
    idSystem: {
        type: String,
    },
    // max: { type: String},
    // min: { type: String}
});

/** Convertir a json */
NodeSchema.method('toJSON', function(){
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Nodes', NodeSchema)