import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstStep from "../components/FirstStep";
import Header from "../components/Header"
import SecondStep from "../components/SecondStep";

const AppRouter = () =>(
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route component={FirstStep} path="/" exact={true} />
                <Route component={SecondStep} path="/second" />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter