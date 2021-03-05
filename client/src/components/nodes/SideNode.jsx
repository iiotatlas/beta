import React from "react";
import { Col, Row } from "reactstrap";
import { sideNodeData } from "../../helpers/dataAccess";

const SideNode = () => {
    // TODO: REEMPLAZAR con los valores de la peticion api-rest */
    const {
        simbol,
        nameUnits,
        units,
        valueMax,
        timeMax,
        valueMin,
        timeMin,
        valueProm

    } = sideNodeData;

    return (
        <Row className="m-0 chart-left chart-left">
            <Col xl="12" className="p-0 left_side_earning">
                <h5>
                    {valueMax}
                    <span dangerouslySetInnerHTML={{ __html: units }} />
                </h5>
                <p className="font-roboto">{nameUnits + " Maximo"}</p>
            </Col>
            <Col xl="12" className="p-0 left_side_earning">
                <h5>{timeMax}</h5>
                <p className="font-roboto">
                    {"Tiempo " + simbol}
                    <sub>Max</sub>
                </p>
            </Col>
            <Col xl="12" className="p-0 left_side_earning">
                <h5>
                    {valueMin}
                    <span dangerouslySetInnerHTML={{ __html: units }} />
                </h5>
                <p className="font-roboto">{nameUnits + " Minimo"}</p>
            </Col>
            <Col xl="12" className="p-0 left_side_earning">
                <h5> {timeMin}</h5>
                <p className="font-roboto">
                    {"Tiempo " + simbol}
                    <sub>Min</sub>
                </p>
            </Col>
            <Col xl="12" className="p-0 left_side_earning">
                <h5>
                    {valueProm}
                    <span dangerouslySetInnerHTML={{ __html: units }} />
                </h5>
                <p className="font-roboto">{nameUnits + " Promedio"}</p>
            </Col>
            <Col xl="12" className="p-0 left-btn">
                <a className="btn btn-gradient" href="#javascript">
                    {"Resumen"}
                </a>
            </Col>
        </Row>
    );
};

export default SideNode;
