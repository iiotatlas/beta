const { Router } = require('express');
const { pdfCreateStatic } = require('../controllers/pdf.controller');

const router = Router();

router.post('/api/generate-pdf-static', pdfCreateStatic);

module.exports = router;