const {Router} = require('express');
const router = Router();

// const {indexController, postMessage, receiveMessage} = require('../controllers/sms.controller')
const {postMessage} = require('../controllers/sms.controller')

/** Main Routes */
// router.get('/', indexController);

/** Send an SMS */
router.post('/send-sms', postMessage)

/** Recibir sms en tiempo real */
// router.post('/sms', receiveMessage)

module.exports = router