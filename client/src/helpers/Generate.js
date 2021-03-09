
//Variables Principales
const maxPower = 150;
const minPower = 0;
const quantity = 120;
const difMax = 10;
const difMin = -10;
const minTime = 300; //horas por 100
const rangeTime = 3 * 60; //total rango de diferencia en minutos
const difTime = (rangeTime * 100) / (quantity * 60);

// Nuevo dato Aleatorio eje Y
export const dataAleatory = (lastData) => {
    const newData = Math.floor(Math.random() * (difMax - difMin + 1)) + difMin;

    //verificar si esta en el rango especificado caso contrario ralizar la addicion o sustraccion inversa
    if (lastData + newData <= maxPower && lastData + newData >= minPower) {
        return lastData + newData;
    } else {
        return lastData - newData;
    }
};

//generar vector de datos eje Y
export const dataGenerate = () => {
    //inicializar vector
    const powers = [];

    //primer dato aleatorio
    let oneDataGenerate =
        Math.floor(Math.random() * (maxPower - minPower + 1)) + minPower;

    //cargar datos aleatorios
    for (let i = 0; i < quantity; i++) {
        powers[i] = dataAleatory(oneDataGenerate);
        oneDataGenerate = powers[i];
    }

    return powers;
};

//Generar vector de datos en el eje X (tiempo)
export const generateTimes = () => {
    //inicializar vector
    let times = [];
    let time = minTime;
    //cargar datos aleatorios
    for (let i = 0; i < quantity; i++) {
        times[i] = time;
        time = time + difTime;
    }
    // console.log(times);

    return times;
};

/** newValue */
export const newvalue = () => Math.floor(Math.random() * (difMax - difMin + 1)) - difMin;


/** Generar datos aleataorios */
// export const newDataNode = () => {
//   let elem = []
//   for (let i = 0; i < totalPowers.length; i++) {
//       elem =[ ...elem, {
//           "idNode": "2",
//           "ejeY": `${totalPowers[i]}`,
//           "ejeX": `${totalTimes[i]}`,
//       }];
//   }
//   localStorage.setItem("elem", JSON.stringify(elem))
// }