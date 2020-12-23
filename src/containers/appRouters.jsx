import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/layout";
import Create from "../screens/createEmployee/create";
import TeamMembers from "../screens/createEmployee/members";

const Routing = () => {
  return (
    <Switch>
      {/* <Route exact path={"/"} component={Edit} /> */}
      <Switch>
        {/* <Layout> */}
        <Route exact path={"/employees"} component={TeamMembers} />
        <Route exact path={"/employees/add"} component={Create} />
        <Route exact path="/employees/edit/:emp_id/" component={Create} />
        {/* </Layout> */}
      </Switch>
    </Switch>
  );
};
export default Routing;
