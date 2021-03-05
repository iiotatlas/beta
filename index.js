/**
 * Archivo principal
 * @module indexjs
 */

require('dotenv').config();
const { dbConnection } = require('./database/config');
const app = require('./server');
// const jwt = require('express-jwt');

/** Base de Datos */
dbConnection();

 /** Escuchar el puerto */
app.listen(app.get('port'), (err) => {
    if (err) {
        console.log(err)
    }
    console.info(`Server corriendo en el puerto ${ app.get('port') } `);
});


