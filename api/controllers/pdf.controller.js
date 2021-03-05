
const { pdfGenerateStatic } = require('../pdf/pdf');

/** Generacion del html
 * @method get/generate-html-chart/ renderizando el grafico
 */

/** Generador PDF con HTML dinamico */
const pdfCreateStatic = async (req, res) => {
    const { namePDF, user, sizePDF, numberPDF, dataChart } = req.body;
    const data = {
        //PDF
        namePDF,
        user,
        sizePDF,
        numberPDF,
        //CHART
        dataChart,
    };
    await pdfGenerateStatic(data);
    res.send('PDF generado correctamente con Post Static');
};

module.exports = { pdfCreateStatic }