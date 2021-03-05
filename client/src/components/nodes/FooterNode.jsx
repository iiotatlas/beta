import React from "react";
import { Col, Row } from "reactstrap";
import { footerNodeData } from "../../helpers/dataAccess";


const FooterNode = ({ lastValue }) => {

  // TODO: REEMPLAZAR con los valores de la peticion api-rest */
  const { simbol, units, valueMax, valueMin }= footerNodeData;

  return (
    <>
      <Row className="border-top m-0">
        <Col sm="4" className="pl-0 order-2 order-sm-1">
          <div className="media p-0">
            <div className="media-left bg-danger">
              <i className="icofont icofont-database-add"></i>
            </div>
            <div className="media-body">
              <h6>{ valueMax}
              <span dangerouslySetInnerHTML={{__html: units }} /></h6>
              <p>{simbol}<sub>{"max"}</sub></p>
            </div>
          </div>
        </Col>
        <Col sm="4" className="order-1 order-sm-2">
          <div className="media p-0">
            <div className="media-left bg-success">
              <i className="icofont icofont-dashboard"></i>
            </div>
            <div className="media-body">
              <h6>{lastValue ? lastValue : '--'}
                <span dangerouslySetInnerHTML={{__html: units }} />
              </h6>
              <p>{simbol}<sub>{"actual"}</sub></p>
            </div>
          </div>
        </Col>
        <Col sd="4" className="pr-0 order-3 order-sm-3">
          <div className="media p-0">
            <div className="media-left bg-primary">
              <i className="icofont icofont-database-remove"></i>
            </div>
            <div className="media-body">
              <h6>{valueMin}
                <span dangerouslySetInnerHTML={{__html: units }} />
              </h6>
              <p>{simbol}<sub>{"min"}</sub></p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FooterNode;
