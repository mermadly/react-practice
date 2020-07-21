import React, { Component } from "react";

import Component1 from "./functional/component1";

import Container1 from "./container/container1";
import Container2 from "./container/container2";
import Container3 from "./container/container3";
import Header from "./container/header";
import history from "./utils/history";

import { Router, Route, Switch } from "react-router";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Container1} />
              <Route path="/container2" component={Container2} />
              <Route path="/container3" component={Container3} />
              <Route
                path="/component/:id"
                render={(props) => {
                  console.log("props");
                  return <Component1 {...props} />;
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
