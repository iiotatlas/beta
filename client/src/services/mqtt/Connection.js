import React, { useEffect, useContext } from 'react';
import mqtt from 'mqtt';
import { MqttContext } from './MqttContext';
import { recordAccess } from '../../helpers/dataAccess';

const Connection = () => {

    const { client, setClient, setConnectStatus } = useContext(MqttContext);

    const { host, port, clientId, username, password } = recordAccess;
    const url = `ws://${host}:${port}/mqtt`;

    const mqttConnect = (host, mqttOption) => {
        setConnectStatus('Connecting');
        setClient(mqtt.connect(host, mqttOption));
    };

    // const mqttDisconnect = () => {
    //     if (client) {
    //         client.end(() => {
    //             setConnectStatus('Connect');
    //         });
    //     }
    // }

    const options = {
        keepalive: 30,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
            topic: 'WillMsg',
            payload: 'Connection Closed abnormally..!',
            qos: 0,
            retain: false
        },
        rejectUnauthorized: false
    };

    options.clientId = clientId;
    options.username = username;
    options.password = password;
    
    //TODO: conexion directa -  mejorar hook o posicion del evento y eliminar eslint disable
    useEffect(() => {
        mqttConnect(url, options);
        // console.log("conectando");
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (client) {
            client.on('connect', () => {
                setConnectStatus('Connected');
                // console.log('conectado');
            });
            client.on('error', (err) => {
                console.error('Connection error: ', err);
                client.end();
            });
            client.on('reconnect', () => {
                setConnectStatus('Reconnecting');
            });
            client.on('message', (topic, message) => {
                // const payload = { topic, message: message.toString() };
                // setPayload(payload);
            });
        }
        // eslint-disable-next-line
    }, [client]);

    //TODO: Eliminar este renderizado fragmentado
    return ( <></> );
};

export default Connection;
