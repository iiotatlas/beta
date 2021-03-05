const { Schema, model } = require('mongoose');

/** Modelado del esquema plant para mongoDB */

const PlantSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String
    },
    logoName: {
        type: String
    },
    logoDarkUrl: {
        type: String
    },
    //TODO: refactorizar codigo, no sera necesario, ej: logo_test_dark => ${logoName = logo_test}_dark
    logoDarkName: {
        type: String
    },
    //TODO: cambiar a double integer
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    //TODO: mover en otro sitio
    Qos: {
        type: Number
    }
});

/** Convertir a json */
PlantSchema.method('toJSON', function(){
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Plant', PlantSchema)