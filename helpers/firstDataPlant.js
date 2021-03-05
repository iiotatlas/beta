const myPlant = (plants, systems, nodes) => {
    /** Filtracion o mapeado de datos https://prnt.sc/wi9qmx*/


    // TODO: reafactorizacion buenas practicas de codigo, eliminar ej.- atributo: campo.atributo
    plants = plants.map(plant => ({
        name: plant.name,
        description: plant.description,
        logoName: plant.logoName,
        logoDarkName: plant.logoDarkName,
        lat: plant.logoDarkName,
        long: plant.long,
        Qos: plant.Qos
    }));

    systems = systems.map(system => ({
        codSystem: system.codSystem,
        name: system.name,
        numberNodes: system.numberNodes
    }))

    nodes = nodes.map(nodo => ({
        codNode: nodo.codNode,
        name: nodo.name,
    }))

    //TODO: falta implementar la relacion node-system
    let arrayNode = [];
    let numberNode = 0;

    for (let iSystem = 0; iSystem < systems.length; iSystem++) {

        arrayNode = [];

        for (let iNode = 0; iNode < systems[iSystem].numberNodes; iNode++) {
            arrayNode[iNode] = nodes[numberNode];
            numberNode++
        }

        systems[iSystem] = { ...systems[iSystem], nodes: arrayNode };

    }
    let plant = { ...plants[0], systems };
    return plant;
}

//TODO: mover este dato a la base de datos, sugerencia usar S3 de AWS, averiguar
const imageProfile = "../assets/images/dashboard/profile.jpg"

module.exports = {
    myPlant,
    imageProfile
}