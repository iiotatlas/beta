import React from 'react';
import sad from '../../assets/images/other-images/sad.png';
import { Link } from 'react-router-dom';
import {Container,Button,Media,Col} from "reactstrap"
import { BACK_TO_HOME_PAGE } from "../../constant";

const Error404 = () => {

    const title = "404";
    // const msg_description = "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.";
    const msg_description = "Esta pagina actualmente no esta disponible. La razon puede ser porque la pagina no existe o esta se ha relocalizado";

    return (
        <>
            <div className="page-wrapper">
                <div className="error-wrapper">
                <Container>
                    <Media body className="img-100" src={sad} alt="" />
                    <div className="error-heading">
                        <h2 className="headline font-danger">{title}</h2>
                    </div>
                    <Col md="8 offset-md-2">
                        <p className="sub-content">{msg_description}</p>
                    </Col>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                        <Button color="danger-gradien" size='lg'>{BACK_TO_HOME_PAGE}</Button>
                    </Link>
                </Container>
                </div>
            </div>
        </>
    );
};

export default Error404;