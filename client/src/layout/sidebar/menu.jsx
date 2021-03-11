import { Home, Cpu } from 'react-feather';
import { dataPlant } from '../../constant/index'

/** Recuperando datos de plant que previamente de saco de fetch
 * Por seguridad, estoy colocando variables constantes de la planta dataPlant
 * @todo mover el codigo o mejorar el codigo para que la lectura se haga de manera generarl
 */
const plant = JSON.parse(localStorage.getItem('plant')) ||dataPlant;
const systems = plant.systems;

// TODO: WARNING.-  AL parecer generar el array , creo que no es practico o podria tener vulnerabiladades, averiguar para tener buenas practicas
let menuItems = [
    {
        title: 'Principal',
        icon: Home,
        type: 'sub',
        badge: "badge badge-success",
        badgetxt: "2",
        active: false,
        children: [
            {
                // path: `${process.env.PUBLIC_URL}/Home`,
                path: `${process.env.PUBLIC_URL}/Home`,
                title: 'Home',
                type: 'link'
            },
        ]
    }
]


/** Generacion de array de los sistemas y nodos que la componen */
const beforeMenuItemsLength = menuItems.length;
let arrayNode = [];
for (let indexSystem = 0; indexSystem < systems.length; indexSystem++) {

    arrayNode = [];
    for (let indexNode = 0; indexNode < systems[indexSystem].nodes.length; indexNode++) {
        arrayNode[indexNode] = { 
            path: `${process.env.PUBLIC_URL}/node/${systems[indexSystem].nodes[indexNode].codNode}`,
            title: systems[indexSystem].nodes[indexNode].name,
            type: 'link'
        };
    }

    menuItems[indexSystem + beforeMenuItemsLength] = {
        title: systems[indexSystem].name ,
        icon: Cpu,
        type: 'sub',
        active: false,
        children:arrayNode
    };
}

/** Vector completo del menu renderizado */
export const MENUITEMS = [
    {
        menutitle: plant.name,
        menucontent: plant.description || dataPlant.description,
        Items: menuItems,
    },
]