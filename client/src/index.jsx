import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/app";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./route";
import ConfigDB from "./data/customizer/config";
// import { configureFakeBackend } from './services/fack.backend'

// Signin page
import Signin from "./auth/signin";

// Authentication
import Login from "./pages/authentication/login";
import LoginWithBgImage from "./pages/authentication/loginWithBgImage";
import LoginWithBgVideo from "./pages/authentication/loginWithBgVideo";
import LoginWithValidation from "./pages/authentication/loginwithValidation";
import Register from "./pages/authentication/register";
import RegisterWithBgImage from "./pages/authentication/registerWithBgImage";
import RegisterWithBgVideo from "./pages/authentication/registerWithBgVideo";
import UnlockUser from "./pages/authentication/unlockUser";
import Forgetpwd from "./pages/authentication/forgetpwd";
import Resetpwd from "./pages/authentication/resetpwd";

// Error page
import Error404 from "./pages/errors/error404";

// Maintenanc
import Maintenance from "./pages/maintenance";

import Callback from "./auth/callback";
import Loader from "./layout/loader";
import Connection from "./services/mqtt/Connection";
import { MqttContext } from "./services/mqtt/MqttContext";

// setup fake backend
// configureFakeBackend();

const Root = () => {

  // console.log("root of index.jsx");

  const [anim, setAnim] = useState("");
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const abortController = new AbortController();
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem("token");
  // setCurrentUser(currentUser);

  // TODO: cambiar el codigo mqtt en otro sitio
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState("Connect");

  const initMqtt = {
    client,
    setClient,
    connectStatus,
    setConnectStatus,
  };

  /** show loader and after app.jsx */
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (client && connectStatus === "Connected") {
      setShow(false)
    }
  }, [client, connectStatus]);

  useEffect(() => {
    setAnim(animation);
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    // console.log("use Effect");

    return function cleanup() {
      // setCurrentUser(null) delete
      setCurrentUser(null);
      abortController.abort();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename={`/`}>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg1`} component={LoginWithBgImage} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg2`} component={LoginWithBgVideo} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/loginWithValidation`} component={LoginWithValidation} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/signup`} component={Register} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/signupWithImg1`} component={RegisterWithBgImage} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/signupWithImg2`} component={RegisterWithBgVideo} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/forgetPwd`} component={Forgetpwd} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/unlockUser`} component={UnlockUser} />
            <Route path={`${process.env.PUBLIC_URL}/pages/auth/resetPwd`} component={Resetpwd} />

            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404} />

            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance} />

            <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />

            {currentUser !== null || authenticated || jwt_token ? 
              <MqttContext.Provider value={initMqtt}>
                <Connection />

                {show ?
                  (<Loader show={show} />)
                  :
                  (
                    <App>
                      <Route
                        exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                          return ( <Redirect to={`${process.env.PUBLIC_URL}/home`} /> );
                      }} />

                      <TransitionGroup>
                        {routes.map(({ path, Component }) => (
                          <Route
                            key={path}
                            exact
                            path={`${process.env.PUBLIC_URL}${path}`}
                          >
                            {({ match }) => (
                              <CSSTransition
                                in={match != null}
                                timeout={100}
                                classNames={anim}
                                unmountOnExit
                              >
                                {/* TODO: hacer que solo me envie el path o que solo este disponible para node/:nodeID */}
                                <div>
                                  <Component match={match} />
                                  {/* <Component match={match.params.nodeId}/> */}
                                </div>
                              </CSSTransition>
                            )}
                          </Route>
                        ))}
                      </TransitionGroup>
                      <Route component={Error404} />
                    </App>
                  )
                }
              </MqttContext.Provider>
              :
              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
            }
            
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
