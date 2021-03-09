import React, { useState, useEffect } from 'react';
import {Form, Input, Card, Button, FormGroup } from 'reactstrap';
import { newvalue } from '../../helpers/Generate';

const Publisher = ({ publish, topic, qos, enabledForm = false }) => {

  const [payload, setPayload] = useState('45');

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = e.target.payload.value;

    const values = {
      topic,
      qos,
      payload,
    }

    publish(values);
  }

  const onPayload = (e) => {
    setPayload(e.target.value)
  }

  /** generar valor aleatoriamente */
  useEffect(() => {
    const payloadChange = setInterval(() => {

        setPayload( newvalue )
    }, 1000);
    return () => {
        clearInterval(payloadChange)
    }
    // eslint-disable-next-line
}, [payload])

  const PublishForm = () => {
    return (

      <Card title="Publisher" >
        <Form onSubmit={onSubmit}>

          <FormGroup>
            <Input type="textarea" name="payload"  placeholder="Writing payload" value={payload} onChange={ onPayload }/>
          </FormGroup>

          <Button color="primary"> Publish </Button>
        </Form>
      </Card>
    )
  }

  return (
    <>
       {
         enabledForm ?
          <PublishForm />
        :
          <></>
       }
    </>
  );
}

export default Publisher;
