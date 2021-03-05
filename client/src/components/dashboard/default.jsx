import React from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
// import ApexCharts from 'react-apexcharts';
// import { Currentlysale } from './chartsData/apex-charts-data';
// import {Store,Online} from '../../constant'
// import {Dashboard,Summary,Store,Online} from '../../constant'
import Schema from './Schema';


const Default = () => {
  return (
    <>
      <Breadcrumb parent="Principal" title="Planta Vinto" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="12 xl-100" className="dashboard-sec box-col-12">
            <Card className="">
              <CardBody className="p-0">

                  <Schema />

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Default;