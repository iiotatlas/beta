const {Schema, model} = require('mongoose');

const newSchema = new Schema({
    Body: {
        type: String,
        requires: true
    },
    From: {
        type: String
    },
    To: {
        type: String
    }
},{
    /** al crear el documento guarda la fecha de creacion y modificacion */
    timestamps: true
});

module.exports = model('Sms', newSchema)