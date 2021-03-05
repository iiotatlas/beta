import React, { useContext, createContext, useEffect, useState } from "react";

import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import { MqttContext } from "./MqttContext";

export const QosOption = createContext([]);

const qosOption = [
    { label: "0", value: 0, },
    { label: "1", value: 1, },
    { label: "2", value: 2, },
];


const HookMqtt = ({ handleLastValue, options }) => {

    const { viewPublisher, topic, qos } = options;
    const { client, setConnectStatus } = useContext(MqttContext)
    const [isSubed, setIsSub] = useState(false);
    const [payload, setPayload] = useState({});

    const mqttPublish = (context) => {
        if (client) {
            const { topic, qos, payload } = context;
            client.publish(topic, payload, { qos }, (error) => {
                if (error) console.log("Publish error: ", error);
            });
        }
    };

    const mqttSub = (subscription) => {
        if (client) {
            const { topic, qos } = subscription;
            client.subscribe(topic, { qos }, (error) => {
                if (error) {
                    console.log("Subscribe to topics error", error);
                    return;
                }
                setIsSub(true);
                console.log("Subcriber: ",isSubed);
            });
        }
    };

    const mqttUnSub = (subscription) => {
        if (client) {
            const { topic } = subscription;
            client.unsubscribe(topic, (error) => {
                if (error) {
                    console.log("Unsubscribe error", error);
                    return;
                }
                setIsSub(false);
                console.log("Unsubcriber: ",isSubed);
            });
        }
    };

    useEffect(() => {
        if (client) {
            client.on("connect", () => {
                setConnectStatus("Connected");
                console.log("conectado");
            });
            client.on("error", (err) => {
                client.end();
                console.error("Connection error: ", err);
            });
            client.on("reconnect", () => {
                setConnectStatus("Reconnecting");
            });
            client.on("message", (topic, message) => {
                const payload = { topic, message: message.toString() };
                setPayload(payload);
            });
        }
        // eslint-disable-next-line
    }, [client]);

    //TODO: remove // eslint-disable-next-line
    useEffect(() => {
        handleLastValue(payload.message);
        // eslint-disable-next-line
    }, [payload]);

    return (
        <QosOption.Provider value={qosOption}>
            <Subscriber
                sub={mqttSub}
                unSub={mqttUnSub}
                topic={topic}
                qos={qos}
            />
            <Publisher
                publish={mqttPublish}
                enabledForm={viewPublisher}
                topic={topic}
                qos={qos}
            />
        </QosOption.Provider>
    );
};

export default HookMqtt;