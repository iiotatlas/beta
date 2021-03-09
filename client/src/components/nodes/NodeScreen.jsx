import React from 'react';
import Nodo from './Nodo';
import { generateTimes, dataGenerate } from '../../helpers/Generate';

/** Recuperamos la ID de nuestra url nodeId */
const NodeScreen = ({match:{params:{nodeId}}}) => {

    const totalTimes = generateTimes();
    const totalPowers = dataGenerate();

    const optionsData = {
        ID:'Node-1',
        idNode:'1',
        nameSerie:'Caudal',
        minValueY: 0,
        maxValueY: 155,
        QtyY: 10,
        QtyX: 12,
        dataY: totalPowers,
        dataX: totalTimes,
        heightChart: 'auto',
        typeChart: 'area',
        colorChart: '#546E7A',
        // colorArea: 'sky',
        //WidthLine: 4,
        //ColorLine: 'blue',
    }

    const optionsMqtt = {
        topic: '1/1/1',
        qos: 0,
        viewSubscriber: false,
        viewPublisher: true,
        viewReceiver: true,
    }

    return (
        <>
            <h1>{nodeId}</h1>
            <Nodo
                optionsData = {optionsData}
                optionsMqtt = {optionsMqtt}
            />
        </>
    )
}

export default NodeScreen
