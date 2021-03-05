const { Schema, model } = require('mongoose');

/** Modelado del esquema plant para mongoDB */

const SystemSchema = Schema({
    codSystem: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numberNodes: {
        type: Number
    },
});

/** Convertir a json */
SystemSchema.method('toJSON', function(){
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Systems', SystemSchema)