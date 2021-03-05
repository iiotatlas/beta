import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MqttContext } from './MqttContext';

const Subscriber = ({ sub, unSub, topic, qos = 0 }) => {

  const { connectStatus } = useContext(MqttContext);

  const record = {
    topic,
    qos,
  };

  const handleUnsub = () => {
    unSub(record);
    console.log("desubscrito de ", topic);
  };

  const handleSubscribe = () => {
    sub(record);
    console.log("Subscrito en ", topic);
  }

  useEffect(() => {
    if (connectStatus === "Connected") {
      handleSubscribe();
    }
    // eslint-disable-next-line
  }, [connectStatus])

  useEffect(() => {
    return () => {
      handleUnsub();
    }
    // eslint-disable-next-line
  }, [])


  /* TODO: Mejorar la fragmentacion, best practice */
  return (<></>);
}

export default Subscriber;
