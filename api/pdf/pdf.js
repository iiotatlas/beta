const puppeteer = require("puppeteer");
const htmlContentForPDF = require("../libs/contentHtmlPdf");

/** Codigo para generar PDF */

//Datos por defecto
const defaultData = {
    urlHtml : `http://localhost:3000/api/generate-pdf-static`,
    namePDF : "chart",
    user : 'user',
    sizePDF : "A4",
    // numberPDF: 111
}

/** Generar PDF con un archivo estatico HTML creado */
const pdfGenerateStatic = async (data) => {
    //Valores por defecto
    const { namePDF: _namePDF, user: _user, sizePDF: _sizePDF, dataChart: _dataChart } = defaultData ;
    //Valores asignados para llamar a las funciones
    const { namePDF=_namePDF, user=_user, sizePDF=_sizePDF, numberPDF, dataChart } = data;
    //valor random
    const numPDF = numberPDF || randomNumber();
    const urlPath = `./api/generate/pdfs/${namePDF}-${user}-${numPDF}.pdf`;

    //Iniciacion de browsers para el renderizado del PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //Llamada al metodo que contiene la estructura HTML-CSS-JS
    const htmlContent = htmlContentForPDF(dataChart);
    //Renderizado del HTML
    await page.setContent(htmlContent)
    //Generacion del pdf el el path de direccion indicado y formato de pdf establecido
    await page.pdf({ path: urlPath, format: sizePDF });
    //Cierre del browser
    await browser.close();
};

const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
}

module.exports = { pdfGenerateStatic };