/**
 * Codigo simple para usar JWT, 
 * @module helpers/jwt
 * @see  middleware/validate-jwt
*/
const jwt = require("jsonwebtoken");
const config = require("../config/config");

/**
 * Funcion para generar un nuevo token con json web token
 * @type {{uid: string, name: string}}
 * */
const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    /** firma los datos de una carga y envia con su llave  */
    jwt.sign(
      payload,
      config.jwtSecret,
      {
        expiresIn: "16h",
      },
      (err, token) => {

        /** Si hay un error */
        if (err) {
          console.error(error);
          reject("No se pudo generar el token");
        }

        /** Si todo sale como se esperaba */
        resolve( token );

      }
    );
  });
};

/**
 * Exportar la funcion generateJWT
 */
module.exports = {
  generateJWT,
};
