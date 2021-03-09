import React from 'react';
// import { useEffect } from 'react';
import Nodo from '../nodes/Nodo';
import { dataGenerate, generateTimes } from '../../helpers/Generate';

const Node1 = () => {

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
            <Nodo
                optionsData = {optionsData}
                optionsMqtt = {optionsMqtt}
            />
        </>
    )
}

export default Node1;
