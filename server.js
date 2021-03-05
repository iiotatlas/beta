/**
 * Archivo principal
 * @module indexjs
 * @todo add CRUD: eventos
 */

/** Creacion del servidor express */
const express = require('express');
const app = express();
// Libreria para seguridad
const path = require("path");
const cors = require('cors');
const config =  require('./config/config')

/** Setting */
app.set('port', config.port)

/** Capa de Seguridad mas */
app.use(cors())

/** Directorio Publico (middleware)*/
// app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join(__dirname, 'client', 'build')));

/** Lectura y parseo del Body: mandar datos desde cliente */
app.use( express.json() );

/** Email */
app.use(require('./services/email/email'));

/** SMS */
app.use(require('./api/routes/sms.route'));

/** PDF */
app.use(require('./api/routes/pdf.route'));

/** Rutas : Autenticacion */
app.use('/api/auth/', require('./api/routes/auth.route'));

app.use('/api/plant/', require('./api/routes/plant.route'));
app.use('/api/systems/', require('./api/routes/systems.route'));
app.use('/api/nodes/', require('./api/routes/nodes.route'));
app.use('/api/datanode/', require('./api/routes/dataNode.route'));

module.exports = app;
