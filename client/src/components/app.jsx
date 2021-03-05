import React from "react";
import { ToastContainer } from "react-toastify";
import { withRouter } from "react-router-dom";

import Taptop from "../layout/tap-top";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import Footer from "../layout/footer";
import ThemeCustomize from "../layout/theme-customizer";

const App = ({ children }) => {

    console.log("App");

    return (
        <>
            <Taptop />

            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                <Header />
                <div className="page-body-wrapper sidebar-icon">
                    <Sidebar />
                    <div className="page-body">{children}</div>
                    <Footer />
                </div>
            </div>

            <ThemeCustomize />
            <ToastContainer />
        </>
    );
};
export default withRouter(App);
