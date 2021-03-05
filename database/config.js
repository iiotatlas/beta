/**
 * Codigo para la conexion a la base de datos
 * @module database/config
 */

const mongoose = require('mongoose');
const config = require('../config/config');

/** Funcion para conectar a la DB */
const dbConnection = async() => {
    try {
        await mongoose.connect(config.dbConn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('DB Online');

    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de inicializar la base datos');
    }
}

module.exports = {
    dbConnection,
}