
//TODO: mover este dato a la base de datos, sugerencia usar S3 de AWS, averiguar
const imageProfile = "../assets/images/dashboard/profile.jpg"

const myPlant = (plants, systems, nodes) => {
    /** Filtracion o mapeado de datos https://prnt.sc/wi9qmx*/

    // TODO: reafactorizacion buenas practicas de codigo, eliminar ej.- atributo: campo.atributo
    plants = plants.map(({
        name, description, logoName, logoDarkName, lat, long, Qos,
    }) => ({
        name,
        description,
        logoName,
        logoDarkName,
        lat,
        long,
        Qos,
    }));

    systems = systems.map(({codSystem, name}) => ({
        codSystem,
        name
    }))

    nodes = nodes.map(({
        codNode,
        codSystem,
        name,
        topMap,
        leftMap
    }) => ({
        codNode,
        codSystem,
        name,
        topMap,
        leftMap,
    }))


    /** Reordenamiento de cada sistema con sus respectivos nodos */

    let arrayNode = [];
    let currentNode = {};

    for (let iSystem = 0; iSystem < systems.length; iSystem++) {

        arrayNode = [];
        let numberNode = 0;

        for (let iNode = 0; iNode < nodes.length; iNode++) {

            if (nodes[iNode].codSystem === systems[iSystem].codSystem) {

                currentNode = {...nodes[iNode]}; //copiar para manipular el nuevo objeto
                delete currentNode.codSystem; //eliminar el atributo codSystem
                arrayNode[numberNode] = currentNode;
                numberNode++;

            }

        }

        systems[iSystem] = { ...systems[iSystem], nodes: arrayNode };

    }

    let plant = { ...plants[0], systems };

    return plant;
}



module.exports = {
    myPlant,
    imageProfile
}