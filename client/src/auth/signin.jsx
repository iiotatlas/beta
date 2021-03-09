import React, { useState, useEffect } from "react";
import man from "../assets/images/dashboard/profile.jpg";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { fetchWithoutToken } from "../services/fack.backend";
import { withRouter } from "react-router-dom";
import { Password, EmailAddress } from "../constant";

const Logins = () => {
  const [email, setEmail] = useState("info@iiotatlas.com");
  const [password, setPassword] = useState("123456");
  const [togglePassword, setTogglePassword] = useState(false);

  const [value, setValue] = useState(localStorage.getItem("profileURL") || man);
  const [name, setName] = useState(localStorage.getItem("Name"));

  /** En caso de cualquier cambio de los tres valores se guardara en localstorage */
  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);

  const loginWithJwt = async (email, password) => {
    const resp = await fetchWithoutToken("auth", { email, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      setValue(body.profile);
      setName(body.name);
      localStorage.setItem("token", body.token);
      localStorage.setItem("plant", JSON.stringify(body.plant));
      // window.location.href = `${process.env.PUBLIC_URL}/home`;
      window.location.href = `${process.env.PUBLIC_URL}/`;
    } else {
      alert("Password o Correo incorrecto");
    }
    return null;
  };

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="/">
                  <img
                    className="img-fluid for-light"
                    src={require("../assets/images/logo/login.png")}
                    alt="logo"
                  />
                  <img
                    className="img-fluid for-dark"
                    src={require("../assets/images/logo/logo_dark.png")}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <h4>{"Ingresar con tu Cuenta"}</h4>
                  <p>{"Ingrese su Email y Contrasenia"}</p>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      className="form-control"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue={email}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <Input
                      className="form-control"
                      type={togglePassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      defaultValue={password}
                      required
                    />
                    <div
                      className="show-hide"
                      onClick={() => setTogglePassword(!togglePassword)}
                    >
                      <span className={togglePassword ? "" : "show"}></span>
                    </div>
                  </FormGroup>
                  <div className="form-group mb-0">
                    <Button
                      color="primary"
                      className="btn-block"
                      onClick={() => loginWithJwt(email, password)}
                    >
                      {"Ingresar"}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Logins);
