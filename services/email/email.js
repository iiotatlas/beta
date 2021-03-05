const { Router } = require('express');
const nodemailer = require('nodemailer');
const config = require('../../config/config');
// require('dotenv').config();
const router = Router();

/** variables */
let emailTo= 'erik.ing.2019@gmail.com';
let emailSubject= 'Sending email using Node JS';

router.post('/send-email', async (req, res) => {
    /** Desestructuracion */
    const { name, email, phone, message } = req.body;

    try {
        /** contenido en formato HTML a enviar */
        contentHTML = `
            <h1> User Information</h1>
            <ul>
                <li>Username: ${name}</li>
                <li>User Email: ${email}</li>
                <li>Phone: ${phone}</li>
                <li>Message: ${message}</li>
            </ul>
        `;

        /** ver documentacion nodemailer */
        let transporter = nodemailer.createTransport({
            // host: "mail.iiotatlas.com",
            // port: 587,
            // secure: false,
            service: 'gmail',
            auth: {
                user: config.userEmail,
                pass: config.passEmail
            }
        });

        /** ver documentacion nodemailer */
        let mailInfo = {
            from: `${config.userEmail}@gmail.com`,
            to: emailTo,
            subject: emailSubject,
            html: contentHTML
        };

        /** ver documentacion nodemailer */
        transporter.sendMail(mailInfo, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        /** Redireccionamiento despues de enviar, o respuesta de la peticion */
        // res.send('received');
        res.json({
            ok: true,
            msg: 'Mensaje enviado correctamente'
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        })
    }
});

module.exports = router;

