import React from 'react';
import { withRouter } from 'react-router-dom';
import Loader from '../layout/loader';

const Callback = () => {

  return (
    <div>
        <Loader/>
    </div>
  );

}

export default withRouter(Callback);