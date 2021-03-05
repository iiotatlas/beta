// Acceso al servidor
export const recordAccess = {
    host: 'broker.emqx.io',
    port: 8083,
    // host: 'servidoriot.ml',
    // port: 8093,
    clientId: 'mqtt' + Math.round(Math.random() * (0- 10000) * -1),
    username: 'web_client',
    password: '123456789',
};

//Node Variables Iniciales
export const footerNodeData = {
    simbol: "Q",
    units  :  "[m<sup>3</sup>/s]",
    valueMax: 234,
    valueMin: 123
};

export const sideNodeData = {
    simbol: "Q",
    nameUnits  :  "Caudal",
    //Sup para que tres sea al cubo, tag html
    units  :  "[m<sup>3</sup>/s]",
    valueMax: 234,
    timeMax: "12:23:23",
    valueMin: 23,
    timeMin: "02:23:23",
    valueProm: "45"
};