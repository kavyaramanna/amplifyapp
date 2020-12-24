import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/layout";
import Create from "../screens/createEmployee/create";
import ViewEmployees from "../screens/createEmployee/viewEmployees";
import Landing from "../screens/landingPage";

const Routing = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Landing} />
      <Switch>
        <Layout>
          <Route exact path={"/employees"} component={ViewEmployees} />
          <Route exact path={"/employees/add"} component={Create} />
          <Route exact path="/employees/edit/:emp_id/" component={Create} />
        </Layout>
      </Switch>
    </Switch>
  );
};
export default Routing;
