const config = require('../../config/config');
const client = require('twilio')(config.accountSid, config.authToken);

/**
 * Envio del SMS al telefono movil
 * @param {string} body The message
 * @param {string} phone The phone number
 */
 
const sendMessage  = async (body, phone) => {
    try {
        const message = await client.messages.create({
            to: phone,
            from:config.phone,
            body
        })
        // console.log(message);
        return message;
    } catch (err) {
        console.log(err);
    }
}
module.exports={sendMessage}