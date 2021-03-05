import React from "react";
import Nodo from "../components/nodes/nodo";
import { dataGenerate, generateTimes } from "../helpers/chartsData/Generate";

const Node2 = () => {
  const totalTimes = generateTimes();
  const totalPowers = dataGenerate();

  const optionsData = {
    ID: "Node-2",
    idNode:'2',
    nameSerie: "Power",
    minValueY: 0,
    maxValueY: 155,
    QtyY: 10,
    QtyX: 12,
    dataY: totalPowers,
    dataX: totalTimes,
    heightChart: "auto",
    typeChart: "area",
    colorChart: "#4266f5",
  };

  const optionsMqtt = {
    topic: "1/1/2",
    qos: 0,
    viewSubscriber: false,
    viewPublisher: true,
    viewReceiver: false,
  };

  return (
    <>
      <Nodo
        optionsData={optionsData}
        optionsMqtt={optionsMqtt}
      />
    </>
  );
};

export default Node2;
