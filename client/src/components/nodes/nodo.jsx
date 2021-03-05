import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import Breadcrumb from "../../layout/breadcrumb";
import ChartNode from "./ChartNode";
import SideNode from "./SideNode";
import FooterNode from "./FooterNode";
import HookMqtt from "../../services/mqtt/MqttConnect";
import { fetchWithToken } from "../../services/fack.backend";

const Nodo = ({optionsData, optionsMqtt}) => {

  //TODO: Aveiguar porque renderiza dos veces
  console.log("renderizado en ", optionsMqtt.topic);
  const [lastValue, setLastValue] = useState(undefined);

  /** pedir los ultimos valores */
  const { idNode } = optionsData;
  const endpoint = "datanode";
  const endpointNode = `${endpoint}/${idNode}`;

  let dataX=[];
  let dataY=[];

  const dataNodeWithJwt = async () => {
    const resp = await fetchWithToken(endpointNode);
    const body = await resp.json();

    const dataNode = body.nodes;

    for (let i = 0; i < dataNode.length; i++) {
      dataY[i] = parseFloat(dataNode[i].ejeY);
      dataX[i] = parseFloat(dataNode[i].ejeX);
    }
  };
  dataNodeWithJwt();

  const handleLastValue = (lastV) => {
    setLastValue(lastV);
  };

  const optionsDataPlus= {
    ...optionsData,
    // dataX,
    // dataY,
  }
  // console.log(optionsDataPlus);

  return (
    <>
      <Breadcrumb parent="System" title="Node" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="12 xl-100" className="dashboard-sec box-col-12">
            <Card className="earning-card card--node">
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col xl="3" className="earning-content p-0 order-2 order-xl-1">

                    <SideNode />

                  </Col>
                  <Col xl="9" className="p-0 order-1 order-xl-2">
                    <div className="chart-right">
                      <Row>
                        <Col xl="12">
                            <CardBody>
                              <div className="current-sale-container">

                                <ChartNode
                                  lastValue={lastValue}
                                  optionsData = {optionsDataPlus}
                                />

                              </div>
                            </CardBody>
                        </Col>
                      </Row>
                    </div>

                    <FooterNode
                      lastValue={lastValue}
                    />

                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">

            <HookMqtt
              handleLastValue={handleLastValue} 
              options={optionsMqtt}
            />

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Nodo;
