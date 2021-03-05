const config = {
    port: process.env.PORT || 3001,
    env: process.env.NODE_ENV || 'development',

    //SMS
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phone: process.env.PHONE,
    name: process.env.DEFAULT_NAME,
    defaultPhone: process.env.DEFAULT_PHONE,

    //EMAIL
    userEmail: process.env.EMAIL_USER,
    passEmail: process.env.EMAIL_PASS,
    
    //JWT
    jwtSecret: process.env.SECRET_JWT_SEED || "YOUR_secret_key",

    //MongoDB
    dbConn : process.env.DB_CNN,
}

module.exports = config;